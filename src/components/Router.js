import React from 'react';
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
} from 'pages/index';

export default function AppRouter() {
  return (
    <>
      <Router>
        <Header />
        <div id="wrap">
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/youtubers" component={List} />
              <Route exact path="/youtubers/review/:id" component={Review} />
              <Route path="/youtubers/review/detail/:id" component={ReviewDetail} />
              {/* 리뷰하기 버튼 눌렀을 때 id값 넘어가게 수정 */}
              <Route path="/youtubers/reviewWrite/:id" component={ReviewWrite} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/profile" component={Profile} />
              <Route component={EmptyPage} />
            </Switch>
          </ScrollToTop>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}
