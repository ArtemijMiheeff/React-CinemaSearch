import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nameSearch: ""
}

const nameSearchSlice = createSlice({
    name: "nameSearch",
    initialState: initialState,
    reducers: {
        setNameSearch: (state, action) => {
            // console.log('!!!', action.payload);
            state.nameSearch = action.payload;
        }
    }
})

export const nameSearchActions = nameSearchSlice.actions;
export const nameSearchReducer = nameSearchSlice.reducer;