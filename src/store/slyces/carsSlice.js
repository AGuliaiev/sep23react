import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    trigger: null,
    carForUpdate: null
};
const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        setAllCars:(state, action)=>{
            state.cars = action.payload;
        },
        trigger: (state, action) => {
            state.trigger = !state.trigger;
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        }
    }
})

const {reducer: carReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {
    carReducer,
    carsActions
}
