import React, { Component } from 'react';
import './SidebarNav.css'

class SidebarNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menuItems:[
                {name:"newTickets"},
                {name:"priorityTickets"},
                {name:"openTickets"},
                {name:"allTickets"},
                {name:"createTicket"}
            ],
            activeMenuItem:"createTicket"
         }
    }

    getActiveState = () => this.state.activeMenuItem
    
    setActiveMenuItem = activeMenuItem => this.setState({...this.state, activeMenuItem: activeMenuItem});

    handleClick = e => this.setActiveMenuItem(e.target.name)

    render() { 
        console.log(this.state)
        return ( 
            <div className="d-flex flex-column sidebarNav list-group">
                <div name="newTickets" 
                    className={"item list-group-item " + (this.getActiveState() === "newTickets" ? "active" : "")}
                    onClick={this.handleClick}
                    >New Tickets
                </div>
                <div name="priorityTickets" 
                    className={"item list-group-item " + (this.getActiveState() === "priorityTickets" ? "active" : "")}
                    onClick={()=>this.handleClick()}
                    >Priority Tickets
                </div>
                <div name="openTickets" 
                    className={"item list-group-item " + (this.getActiveState() === "openTickets" ? "active" : "")}
                    onClick={()=>this.handleClick()}
                    >Open Tickets
                </div>
                <div name="allTickets" 
                    className={"item list-group-item " + (this.getActiveState() === "allTickets" ? "active" : "")}
                    onClick={()=>this.handleClick()}
                    >All Tickets
                </div>
                <div name="createTicket" 
                    className={"item list-group-item " + (this.getActiveState() === "createTicket" ? "active" : "")}
                    onClick={this.handleClick}
                    >Create Ticket
                </div>
            </div>
         );
    }
}
 
export default SidebarNav;