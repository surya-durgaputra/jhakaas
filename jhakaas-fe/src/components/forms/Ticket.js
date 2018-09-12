import React from 'react';

const Ticket = ({tickets}) => {
    return ( 
            <div className="d-flex flex-column">
                {
                    tickets.map(item=>(
                        <div className="bg-warning" key={item.id}>
                            {item.subject}
                        </div>
                    ))
                }
            </div>
    );
}
 
export default Ticket;