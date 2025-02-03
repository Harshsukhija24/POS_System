
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalRevenue: 0,
  totalServicesSold: 0,
  mostPopularService: null,
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addSale: (state, action) => {
      const { amount, service } = action.payload;
      state.totalRevenue += amount;
      state.totalServicesSold += 1;

      
      if (
        !state.mostPopularService ||
        service.sales > state.mostPopularService.sales
      ) {
        state.mostPopularService = { ...service, sales: 1 };
      } else if (service.name === state.mostPopularService.name) {
        state.mostPopularService.sales += 1;
      }
    },
    resetSales: (state) => {
      state.totalRevenue = 0;
      state.totalServicesSold = 0;
      state.mostPopularService = null;
    },
  },
});

export const { addSale, resetSales } = salesSlice.actions;
export default salesSlice.reducer;
