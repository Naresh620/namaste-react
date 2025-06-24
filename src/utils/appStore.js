import { configureStore } from "@reduxjs/toolkit"
import reducer from "./cartSlice";
import cartReducer from "./cartSlice";
const appStore=configureStore({
    reducer:{
        cart:cartReducer,
    }
});

export default appStore;