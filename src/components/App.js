import { useState, useEffect } from 'react';
import axios from 'axios';
import authAPI from 'lib/api/authAPI';
import userAPI from 'lib/api/userAPI';
import AppRouter from 'components/AppRouter';
import { UserContext } from 'lib/UserContext';

function App() {
  // 로그인 유저 객체 상태값
  const [userObj, setUserObj] = useState({
    email: '',
    favoriteCategory: [],
    hasReview: '',
    imageUrl: '',
    nickname: '',
  });

  // 처음 화면 로드 시 토큰 재요청, 로그인 유저 변경
  useEffect(() => {
    if (localStorage.getItem('refreshToken')) {
      authAPI
        .postRefresh()
        .then((res) => {
          localStorage.setItem('refreshToken', res.data.refreshToken);
          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${res.data.accessToken}`;
          userAPI
            .getMe()
            .then(({ data }) => {
              setUserObj({
                email: data.email,
                favoriteCategory: data.favoriteCategory,
                hasReview: data.hasReview,
                imageUrl: data.imageUrl,
                nickname: data.nickname,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          if (err.response.status === 401) {
            window.localStorage.removeItem('refreshToken');
            setUserObj({
              email: '',
              favoriteCategory: [],
              hasReview: '',
              imageUrl: '',
              nickname: '',
            });
            alert('인증 정보가 만료되었습니다. 다시 로그인 후 시도해 주세요.');
          } else {
            console.log(err);
          }
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ userObj, setUserObj }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
