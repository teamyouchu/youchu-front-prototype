import * as style from './style';
import { GoogleLogin } from 'react-google-login';
import loginAPI from 'api/loginAPI';
import userAPI from 'api/userAPI';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login({setUserObj}) {
  const history = useHistory();

  //로그인 성공했을 떄 처리 함수 
  const successGoogle = (res) => {
    loginFunc(res.code, window.location.origin);
  }

  const loginFunc = async (code, url) => {
    await loginAPI
      .postLogin({
        "code": code,
        "redirectUri": url
      })
      .then((res) => {
        localStorage.setItem('refreshToken', res.data.authToken.refreshToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.authToken.accessToken}`;
        // 로그인 시 사용자 상태값 수정
        userAPI
          .getMe()
          .then((res) => {
            const obj = res.data;
            console.log(res.data);
            setUserObj({
              email: obj.email,
              favoriteCategory: obj.favoriteCategory,
              hasReview: obj.hasReview,
              imageUrl: obj.imageUrl,
              nickname: obj.nickname
            });
          })
          .catch((err) => {
            console.error(err);
          })
        if (res.data.isRegistered) {
          history.goBack();
        } else {
          history.push("/signup")
        }
      })
      .catch((err) => {
        console.error(err);
      })
  };

  //로그인 실패했을 때 처리 함수 
  const failGoogle = (res) => {
    alert("구글 로그인에 실패하였습니다");
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
            onSuccess={successGoogle}
            onFailure={failGoogle}
            cookiePolicy={'single_host_origin'}
            responseType="code"
          />
      </style.LoginBox>
    </style.LoginContainer>
  );
}