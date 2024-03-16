import {configureStore} from "@reduxjs/toolkit";
import {authReducer, loadingReducer} from "./slices";
import {carsReducer} from "./slices/CarsSlice";

const store = configureStore({
    reducer:{
        loadingReducer,
        auth: authReducer,
        cars: carsReducer
    }
});

export {
    store
}