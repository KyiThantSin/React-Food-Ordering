import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
    value:1,
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
        },
        addingCart : (state, action) =>{
            //console.log(action.payload)
            const cartItems = {
                "id":action.payload.item.id,
                "name" : action.payload.item.name,
                "price" : action.payload.item.price,
                "number" : action.payload.number,
                "src":action.payload.item.src
            }
            state.cart = state.cart.concat(cartItems)
            //console.log(state.cart)
        },
        deletingCart:(state,action)=>{
           state.cart = state.cart.filter((item)=> item.id !== action.payload)
           //console.log(current(cartItems))
        }
    }
})


export const {increment,decrement,addingCart,deletingCart} = cartSlice.actions;

export default cartSlice.reducer;