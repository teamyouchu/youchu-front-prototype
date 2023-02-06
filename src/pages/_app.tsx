import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import userAPI from '@/api/userAPI';
import { IUser, StateContext, UserContext } from '@/lib/Context';
import Layout from '@/components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  // 로그인 유저 객체 상태값
  const [userObj, setUserObj] = useState<IUser>({ isLogin: false, data: null });
  useEffect(() => {
    if (localStorage.getItem('refreshToken')) {
      userAPI
        .getMe()
        .then(({ data }) => {
          setUserObj({
            ...userObj,
            isLogin: true,
            data,
          });
        })
        .catch((err) => {
          console.log(err);
          setUserObj({
            ...userObj,
            isLogin: false,
            data: null,
          });
          window.localStorage.removeItem('accessToken');
          window.localStorage.removeItem('refreshToken');
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
  // 로그인 버튼 표시 여부 상태값
  const [isShowLogin, setIsShowLogin] = useState(true);
  // 유튜버 등록 모달 표시 여부 상태값
  const [registOpen, setRistOpen] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userObj,
        setUserObj,
      }}
    >
      <StateContext.Provider
        value={{
          isShowHeader,
          setIsShowHeader,
          isSearchShow,
          setIsSearchShow,
          isShowRegisterBtn,
          setIsShowRegisterBtn,
          isShowLogin,
          setIsShowLogin,
          registOpen,
          setRistOpen,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContext.Provider>
    </UserContext.Provider>
  );
}
