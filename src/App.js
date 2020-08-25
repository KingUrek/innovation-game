import React from 'react';
import { Provider } from './context'
import { Route } from 'react-router-dom';
import routes from './routes';
import NerdPage from './components/pages/nerd';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Perfil from './components/pages/Perfil';
import Challenge from './components/pages/Challenge';
import Payment from './components/pages/Payment';
import Checkout from './components/pages/Checkout';

function App() {
  return (
    <Provider>
      <Route path={routes.desafio}>
        <Payment />
        <Checkout />
      </Route>
    </Provider>
  );
}

export default App;
