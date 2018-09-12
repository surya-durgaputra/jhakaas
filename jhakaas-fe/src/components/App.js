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
      isAdmin: true,
      data: data
    }
  }
  setActiveMenuItem = activeMenuItem => {
    const user = {...this.state.data.domain.menu.user, activeMenu:activeMenuItem}
    const menu = {...this.state.data.domain.menu, user:user}
    const domain = {...this.state.data.domain, menu:menu}
    const data = {...this.state.data, domain:domain}
    this.setState({...this.state, data:data});
  }
  handleClick = e =>{
    this.setActiveMenuItem(e.currentTarget.getAttribute('name')) 
  }
  render() {
    return (
      <div className="container-fluid App pt-5">
        {this.state.loggedIn ? <Dashboard data={this.state.data} handleClick={this.handleClick}/> : <Login/>}
      </div>
       
    );
  }
}

export default App;
