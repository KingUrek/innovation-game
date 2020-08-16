import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';
import NerdPage from './components/pages/nerd';
import NaturePage from './components/pages/nature';

function App() {
  return (
    <>
      <Route path={routes.nerd}>
        <NerdPage />
      </Route>
      <Route path={routes.nature}>
        <NaturePage />
      </Route>
    </>
  );
}

export default App;
