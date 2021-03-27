import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../../app/store';

const cartIconSlice = createSlice({
  name: 'cartCounter',
  initialState: {
    value: 0,
  },
  reducers: {
    addToCartCounter: (state) => {
      state.value += 1;
    },
    removeFromCartCounter: (state) => {
      state.value -= 1;
    },
  },
});

export const selectCartCounter = (state: RootState) => state.cartCounter.value;
export const { addToCartCounter, removeFromCartCounter } = cartIconSlice.actions;
export default cartIconSlice.reducer;
