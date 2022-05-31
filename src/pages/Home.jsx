import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import PizzaItem from '../components/PizzaItem';
import { Skeleton } from '../components/PizzaItem/PizzaItemSkeleton';
import Sort from '../components/Sort';
import { changeCategory, changeSort, changePage } from '../redux/slices/filtersSlice';

function Home({ searchValue }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId, sort, currentPage } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(changeCategory(id));
  };

  const onChangeSort = (obj) => {
    dispatch(changeSort(obj));
  };

  const onChangePage = (id) => {
    dispatch(changePage(id));
  };

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    axios
      .get(
        `https://628e2b15368687f3e711a7d0.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [categoryId, sort, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => {
              return <PizzaItem {...item} key={item.id} />;
            })}
      </div>
      <Pagination onChangePage={(i) => onChangePage(i)} currentPage={currentPage} />
    </div>
  );
}

export default Home;
