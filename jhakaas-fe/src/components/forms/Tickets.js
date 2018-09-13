import React, { Component } from 'react';

// const Tickets = ({tickets}) => {
//     return ( 
//         <div className="row">
//             <div className="col-md-2">
//                 <div className="d-flex flex-column">
//                     {
//                         tickets.map(item=>(
//                             <div className="bg-warning" key={item.id}>
//                                 {item.subject}
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//             <div className="col-md-10">
// ticket description
//             </div>
//         </div>
            
//     );
// }
 
// export default Tickets;

class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = { item:props.tickets[0] }
    }
    handleClick = e =>{
console.log("clicked")
    }
    render() { 
        return ( 
            <div className="row">
                <div className="col-md-2">
                    <div className="d-flex flex-column">
                        {
                            this.props.tickets.map(item=>(
                                <div className="bg-warning" key={item.id} 
                                    onClick={(e)=>{this.handleClick(e)}}>
                                        {item.subject}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="d-flex flex-column">
                        <div className="row">
                            <div className="col-md-6">
{this.state.item.subject}
                            </div>
                            <div className="col-md-6">
                            
                            </div>
                        </div>
                    </div> 
                    
                </div>
            </div>
                
        );
    }
}
 
export default Tickets;