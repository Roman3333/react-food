import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности (DESC)',
    sortProperty: 'rating',
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeCategory(state, action) {
      state.categoryId = action.payload;
    },
    changeSort(state, action) {
      state.sort = action.payload;
    },
    changePage(state, action) {
      state.currentPage = action.payload;
    },
    changeFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCategory, changeSort, changePage, changeFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
