import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    prev: null,
    next: null,
    episodes: null
};

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI)=>{
        try {

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice({
    name:'episodesSlice',
    initialState,
    reducers:{
        
    }
})

const {reducer: episodeReducer, actions} = episodesSlice;


const episodesActions = {
    ...actions
}

export {
    episodeReducer,
    episodesActions
}