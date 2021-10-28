import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TopBar, Home, List, Review, ReviewWrite, Login, EmptyPage } from 'pages/index';
import * as style from './styles/RouterStyle';

export default function AppRouter() {
  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <style.Container>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/review" component={Review} />
            <Route path="/reviewWrite" component={ReviewWrite} />
            <Route path="/login" component={Login} />
            <Route component={EmptyPage} />
          </style.Container>
          <Route component={EmptyPage} />
        </Switch>
      </Router>
    </>
  );
}
