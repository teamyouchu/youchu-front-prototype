import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './header/Header';
import Footer from './footer/Footer';
import {
  Home,
  List,
  Review,
  ReviewWrite,
  Login,
  EmptyPage,
  Signup,
  ReviewDetail,
  Profile,
  Search,
} from 'pages/index';
import loginAPI from 'api/loginAPI';
import userAPI from 'api/userAPI';
import axios from 'axios';

export default function AppRouter() {
  const [isShow, setIsShow] = useState(true);
  // 로그인 유저 객체 상태값
  const [userObj, setUserObj] = useState(null);
  // 토큰 재요청 함수, 로그인 유저 변경 코드
  const newRefreshToken = async () => {
    await loginAPI
      .postRefresh()
      .then((res) => {
        localStorage.setItem('refreshToken', res.data.refreshToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.accessToken}`;
        userAPI
          .getMe()
          .then((res) => {
            const obj = res.data;
            console.log(res.data);
            setUserObj({
              email: obj.email,
              favoriteCategory: obj.favoriteCategory,
              hasReview: obj.hasReview,
              imageUrl: obj.imageUrl,
              nickname: obj.nickname
            });
          })
          .catch((err) => {
            console.error(err);
          })
      })
      .catch((err) => {
        console.error(err);
      })
  };
  // 처음 화면 로드 시 토크 재요청 함수 호출
  useEffect(() => {
    newRefreshToken();
  },[]);
  return (
    <>
      <Router>
        {isShow ? (
          <Header userObj={userObj}/>
        ) : (
          null
        )}
        <div id="wrap">
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search">
                <Search setIsShow={setIsShow} />
              </Route>
              <Route exact path="/youtubers" component={List} />
              <Route exact path="/youtubers/review/:id" component={Review} />
              <Route path="/youtubers/review/detail/:id" component={ReviewDetail} />
              {/* 리뷰하기 버튼 눌렀을 때 id값 넘어가게 수정 */}
              <Route path="/youtubers/reviewWrite/:id" component={ReviewWrite} />
              <Route path="/login">
                <Login setUserObj={setUserObj}/>
              </Route>
              <Route path="/signup" component={Signup} />
              <Route path="/profile" component={Profile} />
              <Route component={EmptyPage} />
            </Switch>
          </ScrollToTop>
          <div id="footer">
            {isShow ? (
              <Footer />
            ) : (
              null
            )}
          </div>
        </div>
      </Router>
    </>
  );
}
