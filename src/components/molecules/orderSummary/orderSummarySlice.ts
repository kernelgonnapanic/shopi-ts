import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../../app/store';

const orderSummarySlice = createSlice({
  name: 'cartOrderSummary',
  initialState: {
    cartTotalPrice: 0,
  },
  reducers: {
    addProductPrice: (state, { payload }) => {
      let priceToNumber = parseFloat(payload);
      state.cartTotalPrice += priceToNumber;
    },
    subtractProductPrice: (state, { payload }) => {
      let priceToNumber = parseFloat(payload);
      state.cartTotalPrice -= priceToNumber;
    },
  },
});

export const selectCartOrderSummary = (state: RootState) => state.cartOrderSummary.cartTotalPrice;
export const { addProductPrice, subtractProductPrice } = orderSummarySlice.actions;
export default orderSummarySlice.reducer;
