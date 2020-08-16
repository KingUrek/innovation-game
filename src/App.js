import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';
import NerdPage from './components/pages/nerd';
import NaturePage from './components/pages/nature';
import CombosPage from './components/pages/combos';
import './App.css';

function App() {
  return (
    <>
      <Route path={routes.nerd}>
        <NerdPage />
      </Route>
      <Route path={routes.nature}>
        <NaturePage />
      </Route>
      <Route path={routes.combo}>
        <CombosPage />
      </Route>
    </>
  );
}

export default App;
