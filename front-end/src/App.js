import React from 'react';
import { Route } from 'react-router-dom';
import Cadastro from './pages/cadastro';
import CriarTicket from './pages/criarTicket';
import DashBoard from './pages/dashboard'
import Login from './pages/login'
import ViewTicket from './pages/viewTicket';


function App() {
  return (
    <main>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/cadastrar" component={Cadastro} />
      <Route path="/new/ticket" component={CriarTicket} />
      <Route path="/view/:id" component={ViewTicket} />

    </main>
  )
}


export default App;