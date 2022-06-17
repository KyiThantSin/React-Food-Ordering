import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:1
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        increment : (state) => {
                state.value += 1;
        },
        decrement: (state) => {
            if(state.value > 1){
                state.value -= 1;
            }else{
                state.value = 1;
            }
        }
    }
})


export const {increment,decrement} = cartSlice.actions;

export default cartSlice.reducer;