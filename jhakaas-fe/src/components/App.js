import React, { Component } from 'react';

import './App.css';
import Dashboard from './startup/Dashboard';
import Login from './startup/Login';
import data from '../data/data'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: true,
      isAdmin: true
    }
  }
  render() {
    return (
      <div className="container-fluid App pt-5">
        {this.state.loggedIn ? <Dashboard data={data} /> : <Login/>}
      </div>
       
    );
  }
}

export default App;
