import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAuth} from "../../interfaces";

interface IState{

}
const initialState:IState = {

};

const register = createAsyncThunk<void, {user:IAuth}>(
    'authSlice/register',
    async ()=>{
        try {
            
        } catch (e) {
            
        }
    }
    
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
});