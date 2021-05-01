import React, { Component } from 'react'
import './App.css'
import Header from './components/HeaderComponent'
import Home from './components/HomeComponent'
import Directory from './components/DirectoryComponent'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/directory">
              <Directory />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
