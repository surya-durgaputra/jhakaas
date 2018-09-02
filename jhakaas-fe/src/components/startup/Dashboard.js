import React from 'react';

import Navbar from '../navigation/Navbar'
import SidebarNav from '../navigation/SidebarNav'
import SidebarNavAdmin from '../navigation/SidebarNavAdmin'
import NewTicket from '../forms/NewTicket'
import AdminForm from '../forms/AdminForm'

const Dashboard = ({data}) => {
console.log("data:",data)
console.log("isAdmin:",data.domain.isAdmin)
    if(data.domain.isAdmin===true){
        return (
            <div className="container-fluid">
              <div className="row no-gutters">
                <div className="col-md-2">
                    <SidebarNavAdmin></SidebarNavAdmin>
                </div>
                <div className="col-md-10">
                        <AdminForm></AdminForm>
                    </div>
              </div>
            </div>
         );
    } else {
        return (
            <div className="container-fluid">
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <SidebarNav></SidebarNav>
                    </div>
                    <div className="col-md-10">
                        <NewTicket></NewTicket>
                    </div>
                </div>
            </div>
         );
    }
    
}
 
export default Dashboard;