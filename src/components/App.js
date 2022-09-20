import { useState } from 'react';
import AppRouter from 'components/AppRouter';
import { UserContext } from 'lib/UserContext';

function App() {
  // 로그인 유저 객체 상태값
  const [userObj, setUserObj] = useState({
    id: 0,
    email: '',
    favoriteCategory: [],
    hasReview: false,
    imageUrl: '',
    nickname: '',
  });

  return (
    <UserContext.Provider value={{ userObj, setUserObj }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
