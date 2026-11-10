import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const STORAGE_KEY = 'paradise-nursery-cart-v1';

function loadCart() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved?.items)) {
      return {
        cart: {
          items: saved.items.filter((item) =>
            item && typeof item.id === 'string' &&
            Number.isFinite(item.price) && Number.isInteger(item.quantity) && item.quantity > 0),
        },
      };
    }
  } catch {
    // Private browsing and invalid stored data should never prevent the app from opening.
  }
  return undefined;
}

const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: loadCart(),
});

store.subscribe(() => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: store.getState().cart.items }));
  } catch {
    // Cart still works in memory if browser storage is unavailable.
  }
});

export default store;
