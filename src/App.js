import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';
import NerdPage from './components/pages/nerd';

function App() {
  return (
    <Route path={routes.nerd}>
      <NerdPage />
    </Route>

  );
}

export default App;
