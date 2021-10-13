import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HeaderContainer, Home, List } from 'pages/index';
import * as style from './styles/ContainerStyle';

export default function AppRouter() {
  return (
    <>
      <Router>
        <HeaderContainer />
        <Switch>
          <style.Container>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
          </style.Container>
        </Switch>
      </Router>
    </>
  );
}
