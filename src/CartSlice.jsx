import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    /** Add a new plant or increase the quantity of an existing plant. */
    addItem: (state, action) => {
      const product = action.payload;
      if (!product || !product.id) return;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          image: product.image,
          price: Number(product.price),
          category: product.category,
          light: product.light,
          quantity: 1,
        });
      }
    },
    /** Remove a product entirely, regardless of its current quantity. */
    removeItem: (state, action) => {
      const id = typeof action.payload === 'string' ? action.payload : action.payload?.id;
      state.items = state.items.filter((item) => item.id !== id);
    },
    /** Set a product's quantity; zero (or less) removes the line item. */
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload ?? {};
      const item = state.items.find((entry) => entry.id === id);
      if (!item) return;
      const newQuantity = Math.trunc(Number(quantity));
      if (!Number.isFinite(newQuantity)) return;
      if (newQuantity <= 0) {
        state.items = state.items.filter((entry) => entry.id !== id);
      } else {
        item.quantity = newQuantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
