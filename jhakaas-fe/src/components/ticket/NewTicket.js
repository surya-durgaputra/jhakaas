import React from 'react';
import './NewTicket.css'
const NewTicket = (props) => {
    return ( 
        <form className="form">
            <div className="form-group form-row">
                <div class="form-group col-md-6">
                    <label for="ToTicket" className="col-form-label sr-only">To Email</label>
                    <input type="email" className="form-control" id="ToTicket" aria-describedby="emailHelp" placeholder="To Email"/>
                </div>
                <div class="form-group col-md-6">
                    <label for="FromTicket" className="col-form-label sr-only">From address</label>
                    <input type="email" class="form-control" id="FromTicket" aria-describedby="emailHelp" placeholder="From Email"/>
                </div>
            </div>
            
            <div class="form-group">
                <label for="SubjectTicket" className="sr-only">Subject</label>
                <input type="text" class="form-control" id="SubjectTicket" aria-describedby="subject" placeholder="Subject"/>
            </div>
            <div class="form-group clearfix">
                <label for="TicketDescription" className="ticket-description-label float-left sr-only">Description</label>
                <textarea class="form-control rounded-0" id="TicketDescription" rows="10" aria-describedby="Ticket Description" placeholder="Description of Ticket..."></textarea>
            </div>
            <div class="form-group form-row">
                <div class="form-group col-md-2 offset-md-1">
                    <select class="custom-select">
                        <option selected>Department</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <select class="custom-select">
                        <option selected>Channel</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <select class="custom-select">
                        <option selected>Priority</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <select class="custom-select">
                        <option selected>Type</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <select class="custom-select">
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