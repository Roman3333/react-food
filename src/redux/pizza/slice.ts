import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { Pizza, PizzaSliceState, Status, SearchPizzaParams } from './types';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizzas/fetchPizzaStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const pizzas = await axios.get<Pizza[]>(
      `https://628e2b15368687f3e711a7d0.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return pizzas.data;
  },
);

const initialState: PizzaSliceState = {
  items: [],
  isLoading: Status.LOADING,
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.isLoading = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.isLoading = Status.ERROR;
      state.items = [];
    });
  },
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.isLoading = 'loading';
  //     state.items = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.isLoading = 'ok';
  //     state.items = action.payload;
  //   },
  //   [fetchPizzas.rejected]: (state) => {
  //     state.isLoading = 'error';
  //     state.items = [];
  //   },
  // },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
