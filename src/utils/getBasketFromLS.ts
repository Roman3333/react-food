import { IBasketItem } from '../redux/basket/types';
import { calcTotalPrice } from './calcTotalPrice';

export const getBasketFromLS = () => {
  const data = localStorage.getItem('basket');
  const pizzas = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(pizzas);

  return {
    pizzas: pizzas as IBasketItem[],
    totalPrice,
  };
};
