import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import AppRouter from 'components/AppRouter';
import { UserContext } from 'lib/UserContext';
import userAPI from 'lib/api/userAPI';

function App() {
  // 로그인 유저 객체 상태값
  const [userObj, setUserObj] = useState({ isLogin: false, data: {} });
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('refreshToken')) {
      userAPI
        .getMe()
        .then(({ data }) => {
          if (data.status === 1) {
            setUserObj({
              ...userObj,
              isLogin: true,
              data,
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
          setUserObj({
            ...userObj,
            isLogin: false,
            data: {},
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{ userObj, setUserObj }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
