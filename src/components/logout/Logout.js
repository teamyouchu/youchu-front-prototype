import * as style from './LogoutStyle';
import { useContext } from 'react';
import { UserContext } from 'lib/UserContext';

export default function Logout() {
  const { setUserObj } = useContext(UserContext);
  const onLogoutClick = () => {
    window.localStorage.removeItem('refreshToken');
    setUserObj({
      email: '',
      favoriteCategory: [],
      hasReview: '',
      imageUrl: '',
      nickname: '',
    });
  };
  return (
    <>
      <style.LogoutBtn onClick={onLogoutClick}>로그아웃</style.LogoutBtn>
    </>
  );
}
