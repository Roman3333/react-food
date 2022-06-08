import { configureStore } from '@reduxjs/toolkit';

import filters from './slices/filtersSlice';
import basket from './slices/basketSlice';
import pizzas from './slices/pizzasSlice';

export const store = configureStore({
  reducer: { filters, basket, pizzas },
});
