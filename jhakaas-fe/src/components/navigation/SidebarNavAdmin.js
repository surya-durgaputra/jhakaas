import React, { Component } from 'react';
import './SidebarNavAdmin.css'

class SidebarNavAdmin extends Component {
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
            <div className="d-flex flex-column sidebarNavAdmin list-group">
                <div className="item list-group-item">Create Department</div>
                <div className="item list-group-item">Create Priority</div>
                <div className="item list-group-item">Create Channel</div>
                <div className="item list-group-item">Create Type</div>
            </div>
         );
    }
}
 
export default SidebarNavAdmin;