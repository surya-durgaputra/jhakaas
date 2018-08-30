import React, { Component } from 'react';
import Navbar from './navigation/Navbar'
import SidebarNav from './navigation/SidebarNav'
import SidebarNavAdmin from './admin/SidebarNavAdmin'
import Ticket from './ticket/Ticket'
import NewTicket from './ticket/NewTicket'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-md-2">
              <SidebarNav></SidebarNav>
              <SidebarNavAdmin></SidebarNavAdmin>
            </div>
            <div className="col-md-10">
              <NewTicket></NewTicket>
              {/* <Ticket></Ticket> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
