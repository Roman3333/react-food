import { configureStore } from '@reduxjs/toolkit';

import filters from './filter/slice';
import basket from './basket/slice';
import pizzas from './pizza/slice';

export const store = configureStore({
  reducer: { filters, basket, pizzas },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
