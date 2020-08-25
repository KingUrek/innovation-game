import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Routes from '../../routes';

export default function SecureRouter(children, ...props) {
  // TODO: Validar token no backend
  const logged = !!localStorage.getItem('token');

  if (!logged) {
    return <Redirect to={Routes.home} />;
  }
  return (
    <Route {...props}>
      {children}
    </Route>
  );
}
