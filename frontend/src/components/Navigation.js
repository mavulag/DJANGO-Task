import React from 'react';
import "../App.css";

import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarSubMenu,
    CDBSidebarFooter,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className='sidebar'>
                <CDBSidebar>
                    <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Todo Tasks</CDBSidebarHeader>
                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                            <NavLink exact to="/">
                                <CDBSidebarMenuItem icon="th-large">Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/tasks">
                                <CDBSidebarMenuItem icon="sticky-note">Task List</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/manage">
                                <CDBSidebarMenuItem icon="credit-card" iconType="solid">
                                    Manage Task
                                </CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            className="sidebar-btn-wrapper"
                            style={{ padding: '20px 5px' }}
                        >
                            Sidebar Footer
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div>
        </div>
    );
};

export default Navigation;