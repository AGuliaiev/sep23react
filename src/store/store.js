import {configureStore} from "@reduxjs/toolkit";
import {characterReduce} from "./slyces";

const store = configureStore(
    {
        reducer: {
            characters: characterReduce
        }
    }
)

export {
    store
}