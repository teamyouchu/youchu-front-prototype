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
  ModifyNickName,
  ModifyCategory
} from 'pages/index';

export default function AppRouter({userObj, setUserObj}) {
  const [isShow, setIsShow] = useState(true);
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
              <Route path="/modifyNickName" component={ModifyNickName} />
              <Route path="/modifyCategory" component={ModifyCategory} />
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
