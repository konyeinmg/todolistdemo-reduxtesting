import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 0,
        name: "To Eat",
    },
    {
        id: 1,
        name: "To Sleep",
    }
];

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