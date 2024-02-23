import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useAppContext} from "../../hooks";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm();
    const {chengTrigger} = useAppContext();
    const save = async (car) => {
      await carService.create(car)
        reset()
        chengTrigger()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            <input type={"text"} placeholder={'price'} {...register('price')}/>
            <input type={"text"} placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export {
    CarForm
};