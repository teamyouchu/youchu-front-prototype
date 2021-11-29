import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as style from './headerStyle';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const listener = () => {
    setIsScrolled(window.pageYOffset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
  }, []);

  const history = useHistory();

  function handleReviewBtnClick() {
    history.push('/list');
  }

  return (
    <style.HeaderContainer className={isScrolled ? 'scrolled' : undefined}>
      <style.HeaderBox>
        <style.LogoLink to="/">YouChu</style.LogoLink>
        <style.ReviewButton onClick={handleReviewBtnClick} color="black">
          <style.BarIcon icon={faBars} />
          유튜버 리뷰
        </style.ReviewButton>
        <style.SearchForm>
          <style.SearchImg src="/images/searchIcon.svg" />
          <style.SearchInput placeholder="유튜버 이름으로 검색하세요"></style.SearchInput>
        </style.SearchForm>
        <style.RegisterButton color="red">유튜버 등록</style.RegisterButton>
        <Link to="/login">
          <style.LoginButton>로그인</style.LoginButton>
        </Link>
      </style.HeaderBox>
    </style.HeaderContainer>
  );
}
