import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./FavoriteSlice.js"

const store =configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default store;