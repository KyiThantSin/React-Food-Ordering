import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axiosObj from '../../utils/axiosObj';
  
export const fetchMainMenu = createAsyncThunk('menu/fetchMainMenu', async () => {
    const data = await axiosObj.get('/main');
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
                .addCase(fetchMainMenu.pending,(state,action)=>{
                    state.status = "loading"
                })
                .addCase(fetchMainMenu.fulfilled,(state,action)=>{
                    state.status = "success";
                    state.menu = action.payload
                    //console.log(state.menu)
                })
                .addCase(fetchMainMenu.rejected,(state,action)=>{
                    state.status = "failed";

                })
    }
})

export const selectItemById = (state, id) =>{
    //console.log(state.menu)
   return state.menu.menu.find((item)=> item.id == id)
}

export const {addRating,removeRating} = menuSlice.actions;

export const mainMenuData = (state) => state.menu.menu;

export default menuSlice.reducer;