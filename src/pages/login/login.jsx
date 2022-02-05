import * as style from './style';
import { GoogleLogin } from 'react-google-login';
import loginAPI from 'api/loginAPI';

export default function Login() {
  //로그인 성공했을 떄 처리 함수 
  const successGoogle = (res) => {
    console.log(res)
    loginFunc(res.accessToken)
  }

  const loginFunc = async (accessToken) => {
    await loginAPI
      .postLogin({
        code: accessToken
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  //로그인 실패했을 때 처리 함수 
  const failGoogle = (res) => {
    console.log(res);
  }

  return (
    <style.LoginContainer>
      <style.LoginBox>
        <style.Title>유튜버를 추천받고<br /> 유튜버 리뷰를 남겨보세요!</style.Title>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={renderProps => (
              <style.LoginBtn onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <style.GoogleLogo />
                <style.LoginLetter>구글로 로그인</style.LoginLetter>
              </style.LoginBtn>
            )}
            buttonText="구글로 로그인"
            onSuccess={successGoogle}
            onFailure={failGoogle}
            cookiePolicy={'single_host_origin'}
          />
      </style.LoginBox>
    </style.LoginContainer>
  );
}