import React from 'react';
import './NewTicket.css'
const NewTicket = (props) => {
    let ticket = props.ticket
    return ( 
        <form className="form">
            <div className="form-group form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="ToTicket" 
                     className={"col-form-label " + (ticket==null?"sr-only":"label-left-align")}>
                     To:</label>
                    <input type="email" className="form-control" 
                     id="ToTicket" aria-describedby="emailHelp" 
                     placeholder="To Email"
                     value={ticket!=null?ticket.to:""}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="FromTicket" 
                    className={"col-form-label " + (ticket==null?"sr-only":"label-left-align")}>
                    From:</label>
                    <input type="email" className="form-control" 
                     id="FromTicket" aria-describedby="emailHelp" 
                     placeholder="From Email"
                     value={ticket!=null?ticket.from:""}/>
                </div>
            </div>
            
            <div className="form-group">
                <label htmlFor="SubjectTicket" 
                 className={"col-form-label " + (ticket==null?"sr-only":"label-left-align")}>
                 Subject:</label>
                <input type="text" className="form-control" id="SubjectTicket" 
                 aria-describedby="subject" placeholder="Subject"
                 value={ticket!=null?ticket.subject:""}/>
            </div>
            <div className="form-group">
                <label htmlFor="TicketDescription" 
                 className={"ticket-description-label " + (ticket==null?"sr-only":"label-left-align")}>
                 Description</label>
                <textarea className="form-control rounded-0" id="TicketDescription" 
                 rows="10" aria-describedby="Ticket Description" 
                 value={ticket!=null?ticket.description:""}
                 placeholder="Description of Ticket..."/>
            </div>
            <div className="form-group form-row">
                <div className="form-group col-md-2 offset-md-1">
                    <select className="custom-select" defaultValue={ticket!=null?ticket.department:"0"}>
                        <option value="0">Department</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <select className="custom-select" defaultValue={ticket!=null?ticket.channel:"0"}>
                        <option value="0">Channel</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <select className="custom-select" defaultValue={ticket!=null?ticket.priority:"0"}>
                        <option value="0">Priority</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <select className="custom-select"  defaultValue={ticket!=null?ticket.type:"0"}>
                        <option value="0">Type</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div className="form-group col-md-2" defaultValue="0">
                    <select className="custom-select">
                        <option value="0">Assigned To</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>                
            </div>
        </form>
     );
}
 
export default NewTicket;