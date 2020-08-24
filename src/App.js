import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import NerdPage from './components/pages/nerd';
import NaturePage from './components/pages/nature';
import CombosPage from './components/pages/combos';
import './App.css';
import CustomizationPage from './components/pages/customization';

function App() {
  return (
    <>
      <Switch>
        <Route path={routes.nerd}>
          <NerdPage />
        </Route>
        <Route path={routes.nature}>
          <NaturePage />
        </Route>
        <Route path={routes.customize}>
          <CustomizationPage />
        </Route>
        <Route path={routes.combo}>
          <CombosPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
