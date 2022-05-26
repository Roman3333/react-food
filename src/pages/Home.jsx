import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import PizzaItem from '../components/PizzaItem';
import { Skeleton } from '../components/PizzaItem/PizzaItemSkeleton';
import Sort from '../components/Sort';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://628e2b15368687f3e711a7d0.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItems(res);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => {
              return <PizzaItem {...item} key={item.id} />;
            })}
      </div>
    </>
  );
}

export default Home;
