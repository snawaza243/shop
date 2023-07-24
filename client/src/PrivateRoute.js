import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    element={
      authenticated ? (
        <Component />
      ) : (
        <Navigate to="/" replace={true} />
      )
    }
  />
);

export default PrivateRoute;