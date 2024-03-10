import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Car} from "./Car";
import {carsActions} from "../../store";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(carsActions.getAll())
    }, [trigger, dispatch]);
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
};