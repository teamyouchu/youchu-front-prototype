import { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useGoogleLogin } from '@react-oauth/google';
import { RatedReviewsContext, UserContext } from '@/lib/context';
import authAPI from '@/api/authAPI';
import userAPI from '@/api/userAPI';
import Seo from '@/components/Seo';
import { setCookie } from '@/lib/cookies';
import channelAPI from '@/api/channelAPI';

export default function Login() {
  const { userObj, setUserObj } = useContext(UserContext);
  const { ratedReviews, setRatedReviews } = useContext(RatedReviewsContext);

  const router = useRouter();
  const {
    query: { from },
  } = router;

  // 로그인 성공했을 떄 처리 함수
  const successGoogle = async (code: string) => {
    await authAPI
      .postLogin({
        code: code,
        redirectUri: window.location.origin,
      })
      .then((res) => {
        const { accessToken, refreshToken } = res.data.authToken;
        setCookie('accessToken', accessToken, 1000 * 60 * 30);
        setCookie('refreshToken', refreshToken, 7 * 1000 * 60 * 60 * 24);
        if (from === 'button') {
          channelAPI
            .postReviews(ratedReviews.reviews)
            .then(() => {
              setRatedReviews({
                ...ratedReviews,
                count: 0,
                reviews: [],
              });
            })
            .catch((err) => console.log(err));
          router.push('recommend');
        } else {
          setRatedReviews({
            ...ratedReviews,
            count: 0,
            reviews: [],
          });
          router.back();
        }
        // 로그인 시 사용자 상태값 수정
        userAPI
          .getMe()
          .then(({ data }) => {
            setUserObj({
              ...userObj,
              isLogin: true,
              data,
            });
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (codeResponse) => successGoogle(codeResponse.code),
    onError: (err) => console.log('Login Failed', err),
  });

  return (
    <>
      <Seo title="로그인" description={'유추 로그인 페이지입니다.'} />
      <main className="login_container">
        <div className="login_box">
          {from == 'withAuth' ? (
            <span>
              로그인이 필요한 서비스입니다.
              <br />
              로그인 후 이용해주세요!
            </span>
          ) : (
            <>
              <span>
                유튜버 평점을 남기고
                <br />
                추천 받아봐요!
              </span>
            </>
          )}

          <button className="login_btn" onClick={login}>
            <div className="LoginLetter">
              <Image
                src={'/images/google logo.png'}
                alt={'google logo'}
                width={18}
                height={18}
                style={{ position: 'absolute', left: '-32px', top: '0.5px' }}
              />
              구글로 로그인
            </div>
          </button>
        </div>
      </main>

      <style jsx>{`
        .login_container {
          padding-top: 81px;
          padding-bottom: 100px;
        }

        .login_box {
          width: 400px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
        }

        span {
          text-align: left;
          font-family: 'SHSN-L';
          font-size: 25px;
          line-height: 35px;
          color: #000000;
          letter-spacing: 0px;
          margin-bottom: 40px;
        }

        .login_btn {
          width: 100%;
          height: 55px;
          background: #ffffff 0% 0% no-repeat padding-box;
          border: 1px solid #dedede;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .LoginLetter {
          position: relative;
          text-align: center;
          font-family: 'SHSN-M';
          font-size: 15px;
          line-height: 19px;
          color: #000000;
        }

        .google_logo {
          width: 18px;
          height: 18px;
          position: absolute;
          left: -32px;
          top: 0.5px;
        }

        @media (max-width: 400px) {
          .login_box {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </>
  );
}
