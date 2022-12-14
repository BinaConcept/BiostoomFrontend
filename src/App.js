import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { Employee } from './components/employee/employee'
import { Login } from './components/login/login'

function App() {
  return (
    <Router>
      <Navbar />
      {/* <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section>
                <h2>Welcome to the Redux Essentials example app!</h2>
              </section>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div> */}
      <Employee/>
    </Router>
  )
}

export default App
