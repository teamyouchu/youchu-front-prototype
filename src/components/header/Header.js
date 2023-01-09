import * as style from './HeaderStyle';
import { useState, useEffect, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { UserContext } from 'lib/UserContext';
import SearchInput from 'components/searchInput/SearchInput';
import Registration from 'components/registration/Registration';
import LogoutModal from './logoutModal/LogoutModal';

export default function Header() {
  const {
    userObj,
    isShowHeader,
    isSearchShow,
    isShowRegisterBtn,
    registOpen,
    setRistOpen,
    isShowLogin,
  } = useContext(UserContext);

  // TODO 서지수 status관련 수정되면 활성화 하기
  // const history = useHistory();
  // useEffect(() => {
  //   if (userObj.isLogin && userObj.data.status === 2) {
  //     alert('회원가입을 완료해주세요.');
  //     history.push({
  //       pathname: '/signup',
  //       state: { from: 'button' },
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userObj]);

  // 스크롤 여부 (하단 그림자)
  const [isScrolled, setIsScrolled] = useState(false);
  const listener = () => {
    setIsScrolled(window.pageYOffset > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  // 로그아웃 모달 토글
  const [showLogout, setShowLogout] = useState(false);
  const onAvatarClick = () => {
    setShowLogout(!showLogout);
  };

  return (
    <style.HeaderContainer className={isScrolled && 'scrolled'}>
      <style.HeaderBox className={isShowHeader ? null : 'noShow'}>
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
          {isShowRegisterBtn && (
            <style.RegisterBtn
              onClick={() => {
                setRistOpen(true);
              }}
            >
              유튜버 등록
            </style.RegisterBtn>
          )}
          {userObj.isLogin ? (
            <style.GoogleAvatarBox>
              <style.GoogleAvatar
                src={require('assets/images/DefaultProfile.png').default}
                onClick={onAvatarClick}
              />
              {showLogout && <LogoutModal setShowLogout={setShowLogout} />}
            </style.GoogleAvatarBox>
          ) : (
            <>
              {isShowLogin && (
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
            </>
          )}
        </style.HeaderFlex>
      </style.HeaderBox>
      {registOpen && <Registration />}
    </style.HeaderContainer>
  );
}
