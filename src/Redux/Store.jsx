// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import salesReducer from "./SalesSlice";
import languageReducer from "./LanguageSlice"; // Import Language Slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    sales: salesReducer,
    language: languageReducer, // Add Language Reducer
  },
});
