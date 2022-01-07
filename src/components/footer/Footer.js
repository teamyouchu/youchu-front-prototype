import * as style from './FooterStyle';

export default function Footer() {
  return (
    <style.FooterContainer>
      <style.FooterBox>
        <style.FooterFlex>
          <style.FooterSpan to="/">서비스 소개</style.FooterSpan>
          <style.FooterSpan to="/">이용약관</style.FooterSpan>
          <style.FooterSpan to="/">개인정보 처리방침</style.FooterSpan>
        </style.FooterFlex>
        <style.FooterFlex>
          <style.FootermailTitle>
            문의 : <style.Footermail>youchukmu@gmail.com</style.Footermail>
          </style.FootermailTitle>
        </style.FooterFlex>
      </style.FooterBox>
    </style.FooterContainer>
  );
}
