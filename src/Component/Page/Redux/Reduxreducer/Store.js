import rootReducer from "./Reduxindex";
import { configureStore } from "@reduxjs/toolkit";

 const Store = configureStore({ 
    reducer: rootReducer
 });
 export default Store;