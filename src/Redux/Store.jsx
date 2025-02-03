
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import salesReducer from "./SalesSlice";
import languageReducer from "./LanguageSlice";  

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    sales: salesReducer,
    language: languageReducer, 
  },
});
