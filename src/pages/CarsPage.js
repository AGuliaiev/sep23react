import React from 'react';
import {Cars} from "../components/CarsContainer";
import {CarForm} from "../components/CarsContainer";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {
    CarsPage
};