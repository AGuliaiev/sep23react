import {configureStore} from "@reduxjs/toolkit";
import {episodeReducer} from "./slices";

const store = configureStore({
    reducer:{
        episodes: episodeReducer

    }
})

export {
    store
}