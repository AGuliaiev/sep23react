import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    prev: null,
    next: null,
    episodes: []
};

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {prev, next}, results} = action.payload;
                state.prev = prev
                state.next = next
                state.episodes = results
            })
})

const {reducer: episodeReducer, actions} = episodesSlice;


const episodesActions = {
    ...actions,
    getAll
}

export {
    episodeReducer,
    episodesActions
}