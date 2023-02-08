import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { IUser, UserContext } from '@/lib/context1';
import userAPI from '@/api/userAPI';
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

  return (
    <UserContext.Provider
      value={{
        userObj,
        setUserObj,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}
