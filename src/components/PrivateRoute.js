import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('refreshToken') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
                msg1: '로그인이 필요한 서비스입니다.',
                msg2: '로그인 후 이용해주세요!',
              },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
