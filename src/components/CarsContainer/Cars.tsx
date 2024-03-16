import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Car} from "./Car";
import {carsActions} from "../../store/slices/CarsSlice";

const Cars = () => {
    const {cars} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carsActions.getAll())
    }, [])

    return (
        <div>
            {cars?.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};