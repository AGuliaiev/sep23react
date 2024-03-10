import React from 'react';
import {useDispatch} from "react-redux";
import {carsActions} from "../../store";

const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carsActions.setCarForUpdate(car))}>update</button>
            <button onClick={()=>dispatch(carsActions.deleteById({id}))}>delete</button>
        </div>
    );
};

export {
    Car
};