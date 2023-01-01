import * as style from './LogoutModalStyle';
import { useRef, useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { async } from 'q';

export default function LogoutModal({ setShowLogout }) {
  const { userObj, setUserObj } = useContext(UserContext);
  const history = useHistory();

  // 모달 외 영역 클릭 시 종료
  const ModalRef = useRef();
  useEffect(() => {
    const handleCloseModal = (e) => {
      if (!ModalRef.current || !ModalRef.current.contains(e.target)) {
        setShowLogout(false);
      }
    };
    window.addEventListener('click', handleCloseModal);
    return () => {
      window.removeEventListener('click', handleCloseModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onProfileClick = () => {
    setShowLogout(false);
    history.push('/profile');
  };
  const onLogoutClick = () => {
    setShowLogout(false);
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    setUserObj({
      ...userObj,
      isLogin: false,
      data: {},
    });
  };
  return (
    <style.LogoutModal ref={ModalRef}>
      <style.MyInfoBtn onClick={onProfileClick}>내 정보</style.MyInfoBtn>
      <style.LogoutBtn onClick={onLogoutClick}>로그아웃</style.LogoutBtn>
    </style.LogoutModal>
  );
}
