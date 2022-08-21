import * as style from './HeaderStyle';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import SearchInput from 'components/searchInput/SearchInput';
import Registration from 'components/registration/Registration';

export default function Header({ isSearchShow }) {
  const { userObj } = useContext(UserContext);

  // 스크롤 여부 (하단 그림자)
  const [isScrolled, setIsScrolled] = useState(false);
  const listener = () => {
    setIsScrolled(window.pageYOffset > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', listener);
  }, []);

  // 유튜버 등록 모달 토글
  const [registOpen, setRistOpen] = useState(false);
  const registClose = () => {
    setRistOpen(!registOpen);
  };

  return (
    <style.HeaderContainer className={isScrolled ? 'scrolled' : undefined}>
      <style.HeaderBox>
        <style.HeaderFlex M_direction={'column'}>
          <style.LogoLink to="/">
            <style.LogoImg
              src={require('assets/images/YouChu_logo.png').default}
            />
          </style.LogoLink>
          <style.HeaderNavBox>
            <style.HeaderNav exact to="/">
              홈
            </style.HeaderNav>
            <style.HeaderNav to="/youtubers">유튜버 리뷰</style.HeaderNav>
          </style.HeaderNavBox>
        </style.HeaderFlex>
        <style.HeaderFlex>
          {isSearchShow && <SearchInput page={'header'} />}
          <style.RegisterBtn onClick={registClose}>
            유튜버 등록
          </style.RegisterBtn>
          {registOpen && <Registration registClose={registClose} />}
          {userObj.imageUrl !== '' ? (
            <style.HeaderLink to="/profile">
              <style.GoogleAvatar src={userObj.imageUrl} />
            </style.HeaderLink>
          ) : (
            <style.HeaderLink
              to={{
                pathname: '/login',
                state: {
                  from: 'button',
                },
              }}
            >
              <style.LoginButton>로그인</style.LoginButton>
            </style.HeaderLink>
          )}
        </style.HeaderFlex>
      </style.HeaderBox>
    </style.HeaderContainer>
  );
}
