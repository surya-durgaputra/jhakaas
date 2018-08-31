import React from 'react';
import './NewTicket.css'
const NewTicket = (props) => {
    return ( 
        <form className="form">
            <div className="form-group form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="ToTicket" className="col-form-label sr-only">To Email</label>
                    <input type="email" className="form-control" id="ToTicket" aria-describedby="emailHelp" placeholder="To Email"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="FromTicket" className="col-form-label sr-only">From address</label>
                    <input type="email" className="form-control" id="FromTicket" aria-describedby="emailHelp" placeholder="From Email"/>
                </div>
            </div>
            
            <div className="form-group">
                <label htmlFor="SubjectTicket" className="sr-only">Subject</label>
                <input type="text" className="form-control" id="SubjectTicket" aria-describedby="subject" placeholder="Subject"/>
            </div>
            <div className="form-group clearfix">
                <label htmlFor="TicketDescription" className="ticket-description-label float-left sr-only">Description</label>
                <textarea className="form-control rounded-0" id="TicketDescription" rows="10" aria-describedby="Ticket Description" placeholder="Description of Ticket..."></textarea>
            </div>
            <div className="form-group form-row">
                <div className="form-group col-md-2 offset-md-1">
                    <select className="custom-select">
                        <option selected>Department</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <select className="custom-select">
                        <option selected>Channel</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <select className="custom-select">
                        <option selected>Priority</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <select className="custom-select">
                        <option selected>Type</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <select className="custom-select">
                        <option selected>Assigned To</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>                
            </div>
        </form>
     );
}
 
export default NewTicket;