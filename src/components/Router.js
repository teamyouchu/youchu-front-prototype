import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TopBar, Home, List, Review, ReviewWrite } from 'pages/index';
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
          </style.Container>
        </Switch>
      </Router>
    </>
  );
}
