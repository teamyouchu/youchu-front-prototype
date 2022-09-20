import * as style from './style';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import authAPI from 'lib/api/authAPI';
import userAPI from 'lib/api/userAPI';
import { UserContext } from 'lib/UserContext';

export default function Login() {
  const { setUserObj } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from, msg1, msg2 } = location.state;

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
        if (res.data.isRegistered) {
          if (from === 'button') {
            history.goBack();
          } else {
            history.replace(`${from.pathname}`);
          }
          // 로그인 시 사용자 상태값 수정
          userAPI
            .getMe()
            .then(({ data }) => {
              setUserObj({
                id: data.id,
                email: data.email,
                favoriteCategory: data.favoriteCategory,
                hasReview: data.hasReview,
                imageUrl: data.imageUrl,
                nickname: data.nickname,
              });
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          history.push({
            pathname: '/signup',
            state: { from: from },
          });
        }
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
          {msg1} <br />
          {msg2}
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
