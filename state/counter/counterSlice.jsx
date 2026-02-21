import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialSate,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state)=> {
            state.value -= 1;
        }
    }
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;