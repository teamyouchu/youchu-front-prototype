import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import PrivateRoute from 'components/PrivateRoute';
import {
  Home,
  List,
  Youtuber,
  ReviewWrite,
  Login,
  EmptyPage,
  Signup,
  YoutuberAllReview,
  Profile,
  MyAllReview,
  Search,
  ModifyNickName,
  ModifyCategory,
} from 'pages/pageIndex';

export default function AppRouter() {
  const [isShow, setIsShow] = useState(true);
  const [isSearchShow, setIsSearchShow] = useState(true);
  return (
    <Router>
      {isShow && <Header isSearchShow={isSearchShow} />}
      <div id="wrap">
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search">
              <Search setIsShow={setIsShow} />
            </Route>
            <Route exact path="/youtubers">
              <List setIsSearchShow={setIsSearchShow} />
            </Route>
            <Route
              exact
              path="/youtubers/review/:channel_id"
              component={Youtuber}
            />
            <Route
              path="/youtubers/review/detail/:channel_id"
              component={YoutuberAllReview}
            />
            <PrivateRoute
              path="/youtubers/reviewWrite/:channel_id"
              component={ReviewWrite}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route path="/profile/allReview" component={MyAllReview} />
            <Route path="/modifyNickName" component={ModifyNickName} />
            <Route path="/modifyCategory" component={ModifyCategory} />
            <Route component={EmptyPage} />
          </Switch>
        </ScrollToTop>
        <div id="footer">{isShow && <Footer />}</div>
      </div>
    </Router>
  );
}
