import React from 'react';

const AdminForm = (props) => {
    return ( 
        <form className="form"> 
           <div className="form-group form-row">
                <div className="form-group col-md-2 offset-md-1">
                    <select className="custom-select">
                        <option selected>Category</option>
                        <option value="1">Operations</option>
                        <option value="2">R&amp;D</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="FromTicket" className="col-form-label sr-only">From address</label>
                    <input type="email" className="form-control" id="FromTicket" aria-describedby="emailHelp" placeholder="From Email"/>
                </div>
            </div>
        </form>
     );
}
 
export default AdminForm;