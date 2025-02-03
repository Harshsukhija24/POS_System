import { createSlice } from "@reduxjs/toolkit";
import i18n from "../i18n";

const initialState = { lang: i18n.language || "en" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
      i18n.changeLanguage(action.payload); 
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
