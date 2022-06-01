import { useEffect } from 'react';
import * as style from './style';

export default function Login() {

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "900169742100-tjmma464g1u3md95t4k0lv0h7dlop3oa.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large", width: "380px"}
    );
    google.accounts.id.prompt();
  },[]);

  return (
    <style.LoginContainer>
      <style.LoginBox>
        <style.Title>유튜버를 추천받고<br /> 유튜버 리뷰를 남겨보세요!</style.Title>
          <div id="signInDiv"></div>
      </style.LoginBox>
    </style.LoginContainer>
  );
}