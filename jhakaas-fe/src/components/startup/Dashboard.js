import React from 'react';
import SidebarNav from '../navigation/SidebarNav'
import SidebarNavAdmin from '../navigation/SidebarNavAdmin'
import Ticket from '../forms/Ticket'
import NewTicket from '../forms/NewTicket'
import AdminForm from '../forms/AdminForm'

//const handleClick = e => { console.log("hello there:",e.currentTarget.getAttribute('name')) }
const Dashboard = ({data, handleClick}) => {
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
        let component 
        switch (data.domain.menu.user.activeMenu){
            case "allTickets" :
                                component = <Ticket tickets={data.entity.tickets}></Ticket>
                                break
            case "createTicket" :
                                component = <NewTicket></NewTicket>
                                break
            default:    throw new Error("Incorrect Selection")
        }
        return (
            <div className="container-fluid">
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <SidebarNav user={data.domain.menu.user} handleClick={handleClick}></SidebarNav>
                    </div>
                    <div className="col-md-10">
                        {component}
                    </div>
                </div>
            </div>
         );
    }
    
}
 
export default Dashboard;