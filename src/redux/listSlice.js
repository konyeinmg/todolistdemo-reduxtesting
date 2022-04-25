import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const listSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        addList : (state, action) => {
            state.push(action.payload);
        },

        deleteList : (state, action) => {
            return action.payload;
        }
    }
})

export const { addList, deleteList } = listSlice.actions;
export default listSlice.reducer;