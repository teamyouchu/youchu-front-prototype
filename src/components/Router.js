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
                <Route exact path="/youtubers/review/id=:id" component={Review} />
                <Route path="/youtubers/review/detail" component={ReviewDetail} />
                <Route path="/youtubers/reviewWrite" component={ReviewWrite} />
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
