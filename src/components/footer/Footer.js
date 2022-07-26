import * as style from './FooterStyle';

export default function Footer() {
  return (
    <style.FooterContainer>
      <style.FooterBox>
        <style.FooterUl>
          <style.LinkLi>
            <style.FooterSpan to="/">서비스 소개</style.FooterSpan>
          </style.LinkLi>
          <style.LinkLi>
            <style.FooterSpan to="/">이용약관</style.FooterSpan>
          </style.LinkLi>
          <style.LinkLi>
            <style.FooterSpan to="/">개인정보 처리방침</style.FooterSpan>
          </style.LinkLi>
        </style.FooterUl>
        <style.FooterUl>
          <style.FootermailTitle>
            문의 : <style.Footermail>youchukmu@gmail.com</style.Footermail>
          </style.FootermailTitle>
        </style.FooterUl>
      </style.FooterBox>
    </style.FooterContainer>
  );
}
