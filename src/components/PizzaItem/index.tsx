import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { onAddPizza } from '../../redux/basket/slice';
import { BasketItem } from '../../redux/basket/types';
import { RootState } from '../../redux/store';

type PizzaItemProps = {
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  id: string;
  rating: number;
};

const PizzaItem: React.FC<PizzaItemProps> = ({ title, price, imageUrl, sizes, types, id }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const activeTypes = ['Тонкое', 'Традиционное'];

  const dispatch = useDispatch();
  const pizzaCount = useSelector((state: RootState) =>
    state.basket.pizzas.find((obj) => obj.id === id),
  );

  const changeSize = (size: number) => {
    setActiveSize(size);
  };

  const changeType = (type: number) => {
    setActiveType(type);
  };

  const onAddPizzaItem = () => {
    const obj: BasketItem = {
      title,
      price,
      imageUrl,
      size: sizes[activeSize],
      type: activeTypes[activeType],
      id,
      count: 0,
    };

    dispatch(onAddPizza(obj));
  };

  return (
    <div className="pizza-block">
      <Link to={`/pizza/${id}`}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
      </Link>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => {
            return (
              <li
                className={type === activeType ? 'active' : ''}
                onClick={() => changeType(type)}
                key={type}>
                {activeTypes[type]}
              </li>
            );
          })}
        </ul>
        <ul>
          {sizes.map((size, index) => {
            return (
              <li
                className={index === activeSize ? 'active' : ''}
                onClick={() => changeSize(index)}
                key={size}>
                {size}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"></path>
          </svg>
          <span onClick={onAddPizzaItem}>Добавить</span>
          {pizzaCount && <i>{pizzaCount.count}</i>}
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
