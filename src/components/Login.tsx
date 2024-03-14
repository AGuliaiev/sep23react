import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";

const Login = () => {
    const {register, handleSubmit} = useForm<IAuth>();

    const login:SubmitHandler<IAuth> = async (user) => {

    };
    return (
        <form onSubmit={handleSubmit(login)}>
            <input type={"text"} placeholder={'username'} {...register('username')}/>
            <input type={"text"} placeholder={'password'} {...register('password')}/>
            <button>Login</button>
        </form>
    );
};

export {
    Login
};