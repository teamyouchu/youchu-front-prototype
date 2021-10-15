import React from 'react';
import Logo from './Logo';
import HeaderButton from './HeaderButton';
import Search from './Search';
import * as style from './headerStyle';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function TopBar() {
  return (
    <>
      <style.Positioner>
        <style.Background>
          <Logo></Logo>
          <Link to="/list">
            <HeaderButton color="black" content="유튜버 리뷰"></HeaderButton>
            <style.BarIcon icon={faBars}></style.BarIcon>
          </Link>
          <Search />
          <HeaderButton color="red" content="유튜버 등록" />
          <HeaderButton color="white" content="로그인" />
        </style.Background>
      </style.Positioner>
    </>
  );
}
