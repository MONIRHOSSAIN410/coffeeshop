import { createSlice } from "@reduxjs/toolkit";


const initialState ={
   items:[]
}

export const addToCart =createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
          state.items.push(action.payload)
          localStorage.setItem("items",JSON.stringify(state.items))
           },
           removeItem:(state,action)=>{
            const carData=state.items.filter(item=>item.id!=action.payload.id)
           state.items=carData
           
        }
    }
})


   


export const {addItem,removeItem}=addToCart.actions;
export default addToCart.reducer;
