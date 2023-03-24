import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { IRatedReviews, IUser } from '@/lib/types';
import { RatedReviewsContext, UserContext } from '@/lib/context';
import userAPI from '@/api/userAPI';
import Layout from '@/components/Layout/Layout';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'semantic-ui-css/semantic.min.css';

export default function App({ Component, pageProps }: AppProps) {
  // 로그인 유저 객체 상태값
  const [userObj, setUserObj] = useState<IUser>({
    isLogin: false,
    data: {
      id: 0,
      nickname: '',
      reviewCount: 0,
    },
  });
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
            data: {
              id: 0,
              nickname: '',
              reviewCount: 0,
            },
          });
          window.localStorage.removeItem('accessToken');
          window.localStorage.removeItem('refreshToken');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 평가 예정 채널
  const [ratedReviews, setRatedReviews] = useState<IRatedReviews>({
    count: 0,
    reviews: [],
  });

  return (
    <UserContext.Provider
      value={{
        userObj,
        setUserObj,
      }}
    >
      <RatedReviewsContext.Provider
        value={{
          ratedReviews,
          setRatedReviews,
        }}
      >
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GoogleOAuthProvider>
      </RatedReviewsContext.Provider>
    </UserContext.Provider>
  );
}
