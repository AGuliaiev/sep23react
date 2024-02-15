import React from 'react';
import Users from "../components/usersContainer/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div style={{display:'flex'}}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;