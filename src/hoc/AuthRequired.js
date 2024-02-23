import React from 'react';
import {authService} from "../services";
import {Navigate} from "react-router-dom";

const AuthRequired = ({children}) => {
    const token = authService.getToken();
    if (token) {
        return children
    }
    return <Navigate to={'/login'}/>
};

export {
    AuthRequired
};