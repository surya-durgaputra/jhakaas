import React, { Component } from 'react';
import NewTicket from './NewTicket'
import './Tickets.css'
class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = { item:props.tickets[0] }
    }
    handleClick = (key) =>{
        this.setState({...this.state,item:this.props.tickets[key]})
    }
    render() { 
        return ( 
            <div className="row">
                <div className="col-md-2">
                    <div className="d-flex flex-column list-group tickets">
                        {
                            this.props.tickets.map(item=>(
                                <div className="t-item" key={item.id} 
                                    onClick={(e)=>{this.handleClick(item.id)}}>
                                        {item.subject}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-10">
                    <NewTicket ticket={this.state.item} />
                </div>
            </div>
                
        );
    }
}
 
export default Tickets;