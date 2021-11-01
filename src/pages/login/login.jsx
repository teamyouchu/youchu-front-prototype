import * as style from './style';

export default function Login() {
  return (
    <style.LoginContainer>
      <style.Title>유튜버를 추천받고<br /> 유튜버 리뷰를 남겨보세요!</style.Title>
      <style.LoginBtn>
        <style.GoogleLogo />
        <style.LoginLetter>구글로 로그인</style.LoginLetter>
      </style.LoginBtn>
      <style.NewLetter>신규 사용자이신가요?</style.NewLetter>
      <style.CreateLetter href='https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fhl%3Dko&hl=ko&ec=GAlAwAE&flowName=GlifWebSignIn&flowEntry=AddSession'>
        계정 만들기
      </style.CreateLetter>
    </style.LoginContainer>
  );
}
