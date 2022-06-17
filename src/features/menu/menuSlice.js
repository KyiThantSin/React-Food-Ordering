import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axiosObj from '../../utils/axiosObj';
  
export const fetchData = createAsyncThunk('menu/fetchMenu', async () => {
    const data = await axiosObj.get('/menu');
    return data.data;
})

const initialState = {
    menu:[],
    status: 'idle'
}

export const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
            addRating:(state,action)=>{

            let newItem = state.menu.map((item)=> {
                    if(item.id == action.payload){
                        return {...item,"rating":item.rating + 0.1}
                    }
                    else{
                        return item
                    }
                })
            state.menu = [...newItem]
            //console.log(state.menu)
            },
            removeRating: (state,action) => {
                let newItem = state.menu.map((item)=> {
                    if(item.id == action.payload){
                        return {...item,"rating":item.rating - 0.1}
                    }
                    else{
                        return item
                    }
                })
                state.menu = [...newItem]
            }  
    },
    extraReducers(builder){
            builder
                .addCase(fetchData.pending,(state,action)=>{
                    state.status = "loading"
                })
                .addCase(fetchData.fulfilled,(state,action)=>{
                    state.status = "success";
                    state.menu = action.payload
                    //console.log(state.menu)
                })
                .addCase(fetchData.rejected,(state,action)=>{
                    state.status = "failed";

                })
    }
})

export const selectItemById = (state, id) =>{
    //console.log(state.menu)
   return state.menu.menu.find((item)=> item.id == id)
}

export const {addRating,removeRating} = menuSlice.actions;

export const menuData = (state) => state.menu.menu;

export default menuSlice.reducer;