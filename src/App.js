import React from 'react';
import { Provider } from './context'
import { Route } from 'react-router-dom';
import routes from './routes';
import NerdPage from './components/pages/nerd';
import LoginPage from './components/pages/login';
import Register from './components/pages/Register';
import Perfil from './components/pages/Perfil';

function App() {
  return (
    <Provider>
      <Route path={routes.perfil}>
        <Perfil />
      </Route>
    </Provider>
  );
}

export default App;
