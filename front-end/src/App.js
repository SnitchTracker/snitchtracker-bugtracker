import React from 'react'
import { Link, Route } from 'react-router-dom'
import DashBoard from './pages/Dashboard'
import Login from './pages/Login'

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
    </main>
  )
}


export default App;