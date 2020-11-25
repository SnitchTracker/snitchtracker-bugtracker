import React from 'react';
import { Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import CriarTicket from './pages/CriarTicket';
import DashBoard from './pages/Dashboard'
import Login from './pages/Login'
import ViewTicket from './pages/ViewTicket';


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