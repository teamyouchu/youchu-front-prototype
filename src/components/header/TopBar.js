import React from 'react';
import Logo from './Logo';
import HeaderButton from './HeaderButton';
import Search from './Search';
import * as style from './headerStyle';

export default function TopBar() {
  return (
    <>
      <style.Positioner>
        <style.Background>
          <Logo></Logo>
          <HeaderButton color="black" content="유튜버 리뷰" />
          <Search />
          <HeaderButton color="red" content="유튜버 등록" />
          <HeaderButton color="white" content="로그인" />
        </style.Background>
      </style.Positioner>
    </>
  );
}
