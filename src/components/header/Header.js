import * as style from './HeaderStyle';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import SearchInput from 'components/searchInput/SearchInput';
import Registration from 'components/registration/Registration';
import LogoutModal from 'components/logoutModal/LogoutModal';
import userAPI from 'lib/api/userAPI';
import { useHistory } from 'react-router-dom';

export default function Header({ isSearchShow }) {
  const { userObj, setUserObj } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('refreshToken')) {
      userAPI
        .getMe()
        .then(({ data }) => {
          if (data.status === 1) {
            setUserObj({
              id: data.id,
              email: data.email,
              favoriteCategory: data.favoriteCategory,
              hasReview: data.hasReview,
              imageUrl: data.imageUrl,
              nickname: data.nickname,
            });
          } else if (data.status === 2) {
            history.push({
              pathname: '/signup',
              state: { from: 'button' },
            });
          }
        })
        .catch((err) => {
          console.log(err);
          // setUserObj({
          //   id: 0,
          //   email: '',
          //   favoriteCategory: [],
          //   hasReview: false,
          //   imageUrl: '',
          //   nickname: '',
          // });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    if (window.innerWidth <= 1170) {
      history.push('registration');
      setRistOpen(false);
    } else {
      setRistOpen(!registOpen);
    }
  };

  // 로그아웃 모달 토글
  const [showLogout, setShowLogout] = useState(false);
  const onAvatarClick = () => {
    setShowLogout(!showLogout);
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
          {isSearchShow && (
            <SearchInput page={'header'} setRistOpen={setRistOpen} />
          )}
          <style.RegisterBtn onClick={registClose}>
            유튜버 등록
          </style.RegisterBtn>
          {registOpen && <Registration registClose={registClose} />}
          {userObj.imageUrl !== '' ? (
            <style.GoogleAvatarBox>
              <style.GoogleAvatar
                src={userObj.imageUrl}
                onClick={onAvatarClick}
              />
              {showLogout && <LogoutModal setShowLogout={setShowLogout} />}
            </style.GoogleAvatarBox>
          ) : (
            <style.HeaderLink
              to={{
                pathname: '/login',
                state: {
                  from: 'button',
                  msg1: '유튜버를 추천받고',
                  msg2: '유튜버 리뷰를 남겨보세요!',
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
