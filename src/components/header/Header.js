import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as style from './HeaderStyle';
<<<<<<< HEAD
=======
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Registration from 'components/Registration';
>>>>>>> develop

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [registOpen, setRistOpen] = useState(false);

  const registClose = () => {
    setRistOpen(!registOpen);
  };

  const listener = () => {
    setIsScrolled(window.pageYOffset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
  }, []);

  return (
    <style.HeaderContainer className={isScrolled ? 'scrolled' : undefined}>
      <style.HeaderBox>
<<<<<<< HEAD
        <style.HeaderFlex>
          <style.LogoLink to="/">YouChu</style.LogoLink>
          <style.HeaderNav to="/" exact={true}>
            홈
          </style.HeaderNav>
          <style.HeaderNav to="/youtubers">유튜버 리뷰</style.HeaderNav>
        </style.HeaderFlex>
        <style.HeaderFlex>
          {/* TODO 서지수 백앤드 연결 시 드랍다운 떨어지고 엔터 누르면 검색 */}
          <style.SearchForm>
            <style.SearchImg src="/images/searchIcon.svg" />
            <style.SearchInput placeholder="유튜버 이름으로 검색하세요"></style.SearchInput>
          </style.SearchForm>
          {/* TODO 서지수 클릭 시 등록 모달 창 나오게 수정 */}
          <style.RegisterButton color="red">유튜버 등록</style.RegisterButton>
          <Link to="/login">
            <style.LoginButton>로그인</style.LoginButton>
          </Link>
        </style.HeaderFlex>
=======
        <style.LogoLink to="/">YouChu</style.LogoLink>
        <style.ReviewButton onClick={handleReviewBtnClick} color="black">
          <style.BarIcon icon={faBars} />
          유튜버 리뷰
        </style.ReviewButton>
        {/* TODO 서지수 백앤드 연결 시 드랍다운 떨어지고 엔터 누르면 검색 */}
        <style.SearchForm>
          <style.SearchImg src="/images/searchIcon.svg" />
          <style.SearchInput placeholder="유튜버 이름으로 검색하세요"></style.SearchInput>
        </style.SearchForm>
        {/* TODO 서지수 클릭 시 등록 모달 창 나오게 수정 */}
        <style.RegisterButton color="red" onClick={registClose}>
          유튜버 등록
        </style.RegisterButton>
        <Link to="/login">
          <style.LoginButton>로그인</style.LoginButton>
        </Link>
>>>>>>> develop
      </style.HeaderBox>
      {registOpen && <Registration registClose={registClose} />}
    </style.HeaderContainer>
  );
}
