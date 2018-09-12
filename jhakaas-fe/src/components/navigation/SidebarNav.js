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

    //handleClick = e => { this.setActiveMenuItem(e.currentTarget.getAttribute('name')) }
    
    render() { 
        return ( 
            <div className="d-flex flex-column sidebarNav list-group">
                {this.props.user.entries.map((item, id)=>(
                    <div name={Object.keys(item)[0]}
                        key={id}
                        onClick={(e)=>this.props.handleClick(e)} 
                        className={
                            "item list-group-item " 
                            + (Object.keys(item)[0] === this.props.user.activeMenu ? "active" : "")
                    }>
                        {Object.values(item)[0]}
                    </div>
                ))}

                {/* <div name="newTickets" 
                    className={"item list-group-item " + (this.getActiveState() === "newTickets" ? "active" : "")}
                    onClick={(e)=>this.handleClick(e)}
                    >New Tickets
                </div>
                <div name="priorityTickets" 
                    className={"item list-group-item " + (this.getActiveState() === "priorityTickets" ? "active" : "")}
                    onClick={(e)=>this.handleClick(e)}
                    >Priority Tickets
                </div>
                <div name="openTickets" 
                    className={"item list-group-item " + (this.getActiveState() === "openTickets" ? "active" : "")}
                    onClick={(e)=>this.handleClick(e)}
                    >Open Tickets
                </div>
                <div name="allTickets" 
                    className={"item list-group-item " + (this.getActiveState() === "allTickets" ? "active" : "")}
                    onClick={(e)=>this.handleClick(e)}
                    >All Tickets
                </div>
                <div name="createTicket" 
                    className={"item list-group-item " + (this.getActiveState() === "createTicket" ? "active" : "")}
                    onClick={(e)=>this.handleClick(e)}
                    >Create Ticket
                </div> */}
            </div>
         );
    }
}
 
export default SidebarNav;