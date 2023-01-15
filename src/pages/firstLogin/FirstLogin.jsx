import * as style from './style';
import { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import authAPI from 'api/authAPI';
import userAPI from 'api/userAPI';
import { UserContext } from 'lib/UserContext';

export default function FirstLogin() {
  const { userObj, setUserObj, setIsShowLogin } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state;

  // 로그인 페이지에서는 로그인 버튼 미표시
  useEffect(() => {
    setIsShowLogin(false);
    return () => setIsShowLogin(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //로그인 성공했을 떄 처리 함수
  const successGoogle = async (res) => {
    await authAPI
      .postLogin({
        code: res.code,
        redirectUri: window.location.origin,
      })
      .then((res) => {
        localStorage.setItem('accessToken', res.data.authToken.accessToken);
        localStorage.setItem('refreshToken', res.data.authToken.refreshToken);
        if (from === 'button') {
          history.push('recommendation');
        } else {
          history.push('/');
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
  const failGoogle = (res) => {
    // TODO 서지수 로그인 실패 시 코드 추가
    // alert('구글 로그인에 실패하였습니다');
  };

  return (
    <style.LoginContainer>
      <style.LoginBox>
        <style.Title>
          유튜버 평점을 남기고
          <br />
          추천 받아봐요!
        </style.Title>
        <GoogleLogin
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
        />
      </style.LoginBox>
    </style.LoginContainer>
  );
}
