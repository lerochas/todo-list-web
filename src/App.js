import React, { Fragment }from 'react';
import GlobalStyle from '../src/global/GlobalStyle'
import Dashboard from './pages/Dashboard';

//Aqui eu estou chamando os componentes GlobalStyle, responsável por algumas estilizações aplicadas em toda a aplicação
//E Dashboard, a página central desta aplicação. Todos os demais componentes e funcionalidades passam pelo Dashboard
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Dashboard />
    </Fragment>
  );
}

export default App;
