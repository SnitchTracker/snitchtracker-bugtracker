import React from 'react'
import { Link, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro'
import DashBoard from './pages/dashboard'
import Login from './pages/login'

function App(){
  return(
    <main>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/cadastrar" component={Cadastro} />
    </main>
  )
}


export default App;