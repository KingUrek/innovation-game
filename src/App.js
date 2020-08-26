import React from 'react';

import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import NerdPage from './components/pages/nerd';
import NaturePage from './components/pages/nature';
import CombosPage from './components/pages/combos';
import './App.css';
import CustomizationPage from './components/pages/customization';
import Profile from './components/pages/Profile';
import Payment from './components/pages/Payment';
import Checkout from './components/pages/Checkout';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Challenge from './components/pages/Challenge';
import {Provider} from './context'

function App() {
  return (
    <>
        <Provider>
      <Switch>

        <Route exact path="/">
          <NerdPage />
        </Route>
        <Route path={routes.nerd}>
          <NerdPage />
        </Route>
        <Route path={routes.nature}>
          <NaturePage />
        </Route>
        <Route path={routes.customize}>
          <CustomizationPage />
        </Route>
        <Route path={routes.login}>
          <Login />
        </Route>
        <Route path={routes.register}>
          <Register />
        </Route>
        <Route path={routes.profile}>
          <Profile />
        </Route>
        <Route path={routes.challenge}>
          <Challenge />
        </Route>
        <Route path={routes.payment}>
          <Payment />
        </Route>
        <Route path={routes.combo}>
          <CombosPage />
        </Route>
        <Route path={routes.checkout}>
          <Checkout />
        </Route>
      </Switch>
        </Provider>
    </>
  );
}

export default App;
