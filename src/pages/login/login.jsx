import * as style from './style';
import { GoogleLogin } from 'react-google-login';

export default function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <style.LoginContainer>
      <style.LoginBox>
        <style.Title>유튜버를 추천받고<br /> 유튜버 리뷰를 남겨보세요!</style.Title>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="구글로 로그인"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        <style.LoginBtn>
          <style.GoogleLogo />
          <style.LoginLetter>구글로 로그인</style.LoginLetter>
        </style.LoginBtn>
      </style.LoginBox>
    </style.LoginContainer>
  );
}