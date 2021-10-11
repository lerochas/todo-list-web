import React, { Fragment }from 'react';
import GlobalStyle from '../src/global/GlobalStyle'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Dashboard />
    </Fragment>
  );
}

export default App;
