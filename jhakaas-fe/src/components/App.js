import React, { Component } from 'react';
import Navbar from './navigation/Navbar'
import Sidebar from './navigation/Sidebar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
