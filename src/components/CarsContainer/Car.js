import React from 'react';

const Car = ({car}) => {
    const {id, brand, price, year, photo} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <img src={photo} alt={`${brand} ${year}`}/>
        </div>
    );
}

export {
    Car
};