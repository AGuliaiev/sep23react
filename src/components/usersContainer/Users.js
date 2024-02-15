import React, {useEffect, useState} from 'react';
import {userService} from "../../services/UserService";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;