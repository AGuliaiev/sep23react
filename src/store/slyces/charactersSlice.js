import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    characters: [],
    prevPage: null,
    nextPage: null
};
const characterSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        setResponse: (state, action) => {
            const {info:{prev, next}, results} = action.payload;
            state.characters = results;
            state.prevPage = prev;
            state.nextPage = next;
        }

    }

});

const {reducer: characterReduce, actions} = characterSlice;

const characterActions = {
    ...actions
}

export {characterReduce, characterActions};