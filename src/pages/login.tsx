import { useContext } from 'react';
import { UserContext } from '@/lib/context';
import { useRouter } from 'next/router';
import authAPI from '@/api/authAPI';
import userAPI from '@/api/userAPI';

export default function Login() {
  const { userObj, setUserObj } = useContext(UserContext);
  const router = useRouter();
  const {
    query: { from },
  } = router;

  //로그인 성공했을 떄 처리 함수
  const successGoogle = async (res: { code: string }) => {
    await authAPI
      .postLogin({
        code: res.code,
        redirectUri: window.location.origin,
      })
      .then((res) => {
        localStorage.setItem('accessToken', res.data.authToken.accessToken);
        localStorage.setItem('refreshToken', res.data.authToken.refreshToken);
        if (from === 'button') {
          router.push('recommendation');
        } else {
          router.push('/');
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

  //로그인 실패했을 때 처리 함수
  // const failGoogle = (res) => {
  //   // TODO 서지수 로그인 실패 시 코드 추가
  //   alert('구글 로그인에 실패하였습니다');
  // };

  return (
    <>
      <div className="login_container">
        <div className="login_box">
          <span>
            유튜버 평점을 남기고
            <br />
            추천 받아봐요!
          </span>
          {/* <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <style.LoginBtn
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <style.LoginLetter>
                  <style.GoogleLogo />
                  구글로 로그인
                </style.LoginLetter>
              </style.LoginBtn>
            )}
            onSuccess={successGoogle}
            onFailure={failGoogle}
            cookiePolicy={'single_host_origin'}
            responseType="code"
          /> */}
        </div>
      </div>
      <style jsx>{`
        .login_container {
          padding-top: 81px;
          padding-bottom: 100px;
        }

        .login_box {
          width: 400px;
          margin: 0 auto;
          padding: 0 24px;
          @media (max-width: 400px) {
            width: 100%;
            height: 100%;
          }
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
      `}</style>
    </>
  );
}
