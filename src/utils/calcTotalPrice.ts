import { IBasketItem } from '../redux/basket/types';

export const calcTotalPrice = (pizzas: IBasketItem[]) => {
  return pizzas.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
