import {configureStore} from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';
import cartReducer from '../features/shoppingCart/cartSlice';
import searchReducer from '../features/search/searchSlice';

const store = configureStore({
    reducer:{
        menu:menuReducer,
        cart:cartReducer,
        search:searchReducer
    }
})

export default store;