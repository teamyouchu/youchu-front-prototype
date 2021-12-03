import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './header/Header';
import {
  Home,
  List,
  Review,
  ReviewWrite,
  Login,
  EmptyPage,
  Signup,
  ReviewDetail,
} from 'pages/index';

export default function AppRouter() {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route exact path="/review" component={Review} />
            <Route path="/review/detail" component={ReviewDetail} />
            <Route path="/reviewWrite" component={ReviewWrite} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={EmptyPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}
