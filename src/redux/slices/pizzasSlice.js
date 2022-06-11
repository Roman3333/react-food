import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzaStatus', async (params) => {
  const { sortBy, order, category, search, currentPage } = params;
  const pizzas = await axios.get(
    `https://628e2b15368687f3e711a7d0.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return pizzas.data;
});

const initialState = {
  items: [],
  isLoading: 'loading',
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.isLoading = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.isLoading = 'ok';
      state.items = action.payload;
    },
    [fetchPizzas.rejected]: (state) => {
      state.isLoading = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
