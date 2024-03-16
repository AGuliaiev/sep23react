import {FC, PropsWithChildren} from "react";
import {ICar} from "../../interfaces";

interface IProps extends PropsWithChildren {
    car:ICar
}


const Car: FC<IProps> = ({car}) => {
    const {id, year, price, brand} = car;
    return (
        <div>
            <div>brand: {brand}</div>
            <div>id: {id}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>

        </div>
    );
};

export {
    Car
};