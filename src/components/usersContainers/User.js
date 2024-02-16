import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const navigate = useNavigate();
    const {id, name} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=>navigate(id.toString(), {state:{user}})}>getDetails</button>
        </div>
    );
};

export default User;