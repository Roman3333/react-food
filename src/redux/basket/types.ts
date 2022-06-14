export type IBasketItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

export interface BasketSliceState {
  totalPrice: number;
  pizzas: IBasketItem[];
}
