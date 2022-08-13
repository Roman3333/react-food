import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filters from './filter/slice';
import basket from './basket/slice';
import pizzas from './pizza/slice';
import authentication from './authentication/slice';

export const store = configureStore({
  reducer: { filters, basket, pizzas, authentication },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
