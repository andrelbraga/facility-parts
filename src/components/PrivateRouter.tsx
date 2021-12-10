import { Route, Redirect, useLocation } from 'react-router';
import React from 'react';

const checkExpireToken = () => {
  const value = localStorage.getItem('@Logged');
  return Boolean(value) || false;
};

const PrivateRoute: React.FC<any> = (props: any) => {
  const location = useLocation();

  const checkLocation = (): boolean => {
    return location.pathname !== '/login' && location.pathname !== '/signup';
  };

  const isLogged = checkExpireToken();

  return isLogged && checkLocation() ? <Route {...props} /> : <Redirect to={'/login'} />;
};

export default PrivateRoute;
