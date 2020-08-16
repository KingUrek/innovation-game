import React from 'react';
import { Provider } from './context'
import { Route } from 'react-router-dom';
import routes from './routes';
import NerdPage from './components/pages/nerd';
import LoginPage from './components/pages/login';

function App() {
  return (
    <Provider>
      <Route path={routes.login}>
        <LoginPage />
      </Route>
    </Provider>
  );
}

export default App;
