import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosObj from '../../utils/axiosObj';

export const fetchMenuLists = createAsyncThunk('menu/fetchMenuLists', async () => {
    const data = await axiosObj.get('/menuLists');
    return data.data;
})

const initialState = {
    menuLists:[],
    status:"idle",
    result:[]
}

export const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        searchItem : (state, action) =>{
            const firstChar = action.payload.toUpperCase()[0]
            const searchItem = state.menuLists.filter((item)=> item.name.includes(firstChar))
            state.result = searchItem
            //console.log(state.result)
        },
        deleteSearch : (state) => {
            state.result = []
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchMenuLists.pending,(state,action)=>{
                state.status = "loading"
            })
            .addCase(fetchMenuLists.fulfilled,(state,action)=>{
                state.status = "success";
                state.menuLists = action.payload
                //console.log(state.menuLists)
            })
            .addCase(fetchMenuLists.rejected,(state,action)=>{
                state.status = "failed";

            })
}
})

export const {searchItem, deleteSearch} = searchSlice.actions;

export default searchSlice.reducer;
