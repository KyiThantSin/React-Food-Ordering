import {configureStore} from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';
import cartReducer from '../features/shoppingCart/cartSlice';

const store = configureStore({
    reducer:{
        menu:menuReducer,
        cart:cartReducer
    }
})

export default store;