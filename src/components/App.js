import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import AppRouter from 'components/AppRouter';
import { UserContext } from 'lib/UserContext';
import userAPI from 'api/userAPI';

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

  // 헤더 표시 여부 상태값
  const [isShowHeader, setIsShowHeader] = useState(true);
  // 검색 아이콘 표시 여부 상태값
  const [isSearchShow, setIsSearchShow] = useState(true);
  // 유튜버 등록 버튼 표시 여부 상태값
  const [isShowRegisterBtn, setIsShowRegisterBtn] = useState(true);
  // 유튜버 등록 모달 표시 여부 상태값
  const [registOpen, setRistOpen] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userObj,
        setUserObj,
        isShowHeader,
        setIsShowHeader,
        isSearchShow,
        setIsSearchShow,
        isShowRegisterBtn,
        setIsShowRegisterBtn,
        registOpen,
        setRistOpen,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
