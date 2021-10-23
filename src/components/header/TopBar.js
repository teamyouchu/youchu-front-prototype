import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Search from './Search';
import * as style from './headerStyle';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function TopBar() {
  function scrollF() {
    if (document.documentElement.scrollTop < 60) {
      document.getElementById('navBar').style.top = '0px';
    } else {
      document.getElementById('navBar').style.top = '60px';
    }
  }
  useEffect(() => {
    window.onscroll = scrollF();
  });
  const history = useHistory();

  function handleReviewBtnClick() {
    history.push('/list');
  }

  function handleLogoBtnClick() {
    history.push('/');
  }

  return (
    <>
      <style.HeaderContainer>
        <style.Positioner>
          <style.Background>
            <style.Logo onClick={handleLogoBtnClick}>YouChu</style.Logo>
            <style.ReviewButton onClick={handleReviewBtnClick} color="black">
              <style.BarIcon icon={faBars}></style.BarIcon>유튜버 리뷰
            </style.ReviewButton>
            {/* <style.HeaderContainerrrr.BarIcon icon={faBars}></style.ReviewButton.HeaderContainer.BarIcon> */}
            <Search />
            <style.RegisterButton color="red">유튜버 등록</style.RegisterButton>
            <style.LoginButton>로그인</style.LoginButton>
          </style.Background>
        </style.Positioner>
        <style.BottomBorderBar id="navBar" />
      </style.HeaderContainer>
    </>
  );
}
