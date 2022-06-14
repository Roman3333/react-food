import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBasketItem, BasketSliceState } from './types';

const initialState: BasketSliceState = {
  totalPrice: 0,
  pizzas: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // onAddPizza(state, action) {
    //   state.pizzas = [...state.pizzas, action.payload];
    //   state.totalPrice = state.pizzas.reduce((sum, pizza) => {
    //     return sum + pizza.price;
    //   }, 0);
    // },
    onAddPizza(state, action: PayloadAction<IBasketItem>) {
      const findPizza = state.pizzas.find((obj) => obj.id === action.payload.id);

      if (findPizza) {
        findPizza.count++;
      } else {
        state.pizzas.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.pizzas.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    onMinusPizza(state, action: PayloadAction<string>) {
      const findPizza = state.pizzas.find((obj) => obj.id === action.payload);

      if (findPizza) {
        findPizza.count--;
      }
    },
    onPlusPizza(state, action: PayloadAction<string>) {
      const findPizza = state.pizzas.find((obj) => obj.id === action.payload);

      if (findPizza) {
        findPizza.count++;
      }
    },
    onRemovePizza(state, action: PayloadAction<string>) {
      state.pizzas = state.pizzas.filter((obj) => obj.id !== action.payload);
    },
    clearPizzas(state) {
      state.pizzas = [];
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onAddPizza, onMinusPizza, onPlusPizza, onRemovePizza, clearPizzas } =
  basketSlice.actions;

export default basketSlice.reducer;
