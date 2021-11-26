import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  TopBar,
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
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/review" component={Review} />
          <Route path="/reviewWrite" component={ReviewWrite} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/reviewDetail" component={ReviewDetail} />
          <Route component={EmptyPage} />
        </Switch>
      </Router>
    </>
  );
}
