import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { Company } from './components/company/company'
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
      <Route exact path="/company" component={Company} />
      <Route exact path="/employee" component={Employee} />
      <Route exact path="/login" component={Login} />  
    </Router>
  )
}

export default App
