import * as style from './FirstHeaderStyle';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from 'lib/UserContext';
import LogoutModal from 'components/header/logoutModal/LogoutModal';

export default function FirstHeader() {
  const { userObj, isShowLogin } = useContext(UserContext);

  // 로그아웃 모달 토글
  const [showLogout, setShowLogout] = useState(false);
  const onAvatarClick = () => {
    setShowLogout(!showLogout);
  };

  return (
    <style.FirstHeaderContainer>
      <style.FirstHeaderBox>
        <Link to="/">
          <style.LogoImg
            src={require('assets/images/YouChu_logo.png').default}
          />
        </Link>
        {userObj.isLogin ? (
          <style.GoogleAvatarBox>
            <style.GoogleAvatar
              src={require('assets/images/DefaultProfile.png').default}
              onClick={onAvatarClick}
            />
            {showLogout && <LogoutModal setShowLogout={setShowLogout} />}
          </style.GoogleAvatarBox>
        ) : (
          <Link
            to={{
              pathname: '/login',
              state: {
                from: 'header',
              },
            }}
          >
            {isShowLogin && <style.LoginButton>로그인</style.LoginButton>}
          </Link>
        )}
      </style.FirstHeaderBox>
    </style.FirstHeaderContainer>
  );
}
