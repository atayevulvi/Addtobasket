import { createSlice } from '@reduxjs/toolkit';
import productData from '../productData';

const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (findIndex >= 0) {
        state.cart[findIndex].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {
      const { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalQuantity += quantity;
          cartTotal.totalPrice += itemTotal;
          return cartTotal;
        },
        { totalQuantity: 0, totalPrice: 0 }
      );

      state.totalQuantity = totalQuantity;
      state.totalPrice=parseInt(totalPrice.toFixed(2))
    },
    removeItem:(state, action) =>{
        state.cart=state.cart.filter((item)=>item.id!==action.payload)
    },
    incrementQuantity: (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        item.quantity++;
      },
      decrementQuantity: (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item.quantity === 1) {
          item.quantity = 1
        } else {
          item.quantity--;
        }
      },
  },
});

export const { addToCart, getCartTotal,removeItem,incrementQuantity,decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
