import React from 'react';
import { Provider } from './context'
import { Route } from 'react-router-dom';
import routes from './routes';
import NerdPage from './components/pages/nerd';
import LoginPage from './components/pages/login';
import Register from './components/pages/Register';

function App() {
  return (
    <Provider>
      <Route path={routes.register}>
        <Register />
      </Route>
    </Provider>
  );
}

export default App;
