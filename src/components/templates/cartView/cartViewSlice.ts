import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../../app/store';

export interface CartViewActionsProps {
  id: string;
  image: string;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

const initialState: CartViewActionsProps[] = [];

const cartViewSlice = createSlice({
  name: 'cartBookList',
  initialState,
  reducers: {
    addToCartList: (state, action: PayloadAction<CartViewActionsProps>) => {
      const { id, image, title, author, price } = action.payload;
      const quantity = 1;
      const bookIndex = state.findIndex((element: CartViewActionsProps) => element.id == id);

      if (!state.some((e) => e.id === id)) {
        state.push({ id, image, title, author, price, quantity });
      } else {
        state[bookIndex].quantity += 1;
      }
    },
    removeBookFromCart: (state, action: PayloadAction<CartViewActionsProps>) => {
      const { id, quantity } = action.payload;
      const bookIndex = state.findIndex((e) => e.id == id);

      if (quantity > 1) {
        state[bookIndex].quantity -= 1;
      } else {
        return state.filter((book) => book.id !== id);
      }
    },
  },
});

export const selectCartBookList = (state: RootState) => state.cartBookList;
export const { addToCartList, removeBookFromCart } = cartViewSlice.actions;
export default cartViewSlice.reducer;
