import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {register, reset, handleSubmit,formState:{isValid, errors}, setValue} = useForm({
       mode:'all',
       resolver:joiResolver(carValidator)
    });

    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        await carService.create(car)
        setTrigger(prev=>!prev)
        reset()
    }

    const update =  async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setTrigger(prev=>!prev)
        setCarForUpdate(null)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand', {})}/>
            <input type={"text"} placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            <input type={"text"} placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            {errors.brand&&<div>{errors.brand.message}</div>}
            {errors.price&&<div>{errors.price.message}</div>}
            {errors.year&&<div>{errors.year.message}</div>}
        </form>
        // <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
        //     <input type={"text"} placeholder={'brand'} {...register('brand', {
        //         pattern: {
        //             value:/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
        //             message:'min 1 max 12 character'
        //         }
        //     })}/>
        //     <input type={"text"} placeholder={'price'} {...register('price', {
        //         valueAsNumber: true,
        //         min:{value:0, message:'min o'},
        //         max: {value:1000000, message: 'max 1000000'}
        //     })}/>
        //     <input type={"text"} placeholder={'year'} {...register('year', {
        //         valueAsNumber: true,
        //         min:{value:1990, message: 'min 1990'},
        //         max:{value:new Date().getFullYear(), message:'max current year'}
        //     })}/>
        //     <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
        //     {errors.brand&&<div>{errors.brand.message}</div>}
        //     {errors.price&&<div>{errors.price.message}</div>}
        //     {errors.year&&<div>{errors.year.message}</div>}
        // </form>
    );
};

export default CarForm;