import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, SortType, SortPropertyEnum } from './types';

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности (DESC)',
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeSearch(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    changeCategory(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    changeSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    changePage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    changeFilters(state, action: PayloadAction<FilterSliceState>) {
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCategory, changeSort, changePage, changeFilters, changeSearch } =
  filtersSlice.actions;

export default filtersSlice.reducer;

// if (Object.keys(action.payload).length) {
//   state.currentPage = Number(action.payload.currentPage);
//   state.categoryId = Number(action.payload.categoryId);
//   state.sort = action.payload.sort;
// } else {
//   state.currentPage = 1;
//   state.categoryId = 0;
//   state.sort = {
//     name: 'популярности',
//     sortProperty: SortPropertyEnum.RATING_DESC,
//   };
// }
