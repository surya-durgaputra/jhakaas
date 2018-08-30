import React, { Component } from 'react';
import './SidebarNav.css'

class SidebarNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items:[
                {
                    id:1,
                    name:""
                }
            ]
         }
    }
    render() { 
        return ( 
            <div className="d-flex flex-column sidebarNav list-group">
                <div className="item list-group-item">New Tickets</div>
                <div className="item list-group-item">Priority Tickets</div>
                <div className="item list-group-item">Open Tickets</div>
                <div className="item list-group-item">All Tickets</div>
                <div className="item list-group-item">Create Ticket</div>
                
            </div>
         );
    }
}
 
export default SidebarNav;