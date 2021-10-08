import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Home, HeaderContainer } from 'pages/index';

export default function AppRouter() {
  return (
    <>
      <HeaderContainer />
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </>
  );
}
