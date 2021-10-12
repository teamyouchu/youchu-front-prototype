import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HeaderContainer, Home, List } from 'pages/index';

export default function AppRouter() {
  return (
    <>
      <Router>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
        </Switch>
      </Router>
    </>
  );
}
