import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import PizzaItem from '../components/PizzaItem';
import { Skeleton } from '../components/PizzaItem/PizzaItemSkeleton';
import Sort, { list } from '../components/Sort';

import { changeCategory, changePage, changeFilters } from '../redux/filter/slice';

import { fetchPizzas } from '../redux/pizza/slice';
import { RootState } from '../redux/store';

const Home: React.FC = () => {
  const isMounted = useRef(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filters,
  );
  const { items, isLoading } = useSelector((state: RootState) => state.pizzas);

  const onChangeCategory = (id: number) => {
    dispatch(changeCategory(id));
  };

  const onChangePage = (id: number) => {
    dispatch(changePage(id));
  };

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchPizzas({ sortBy, order, category, search, currentPage }));
  };

  // Если изменили параметры и уже был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  // Если был первый рендер, то проверяем url-параметры и сохраняем в редакс
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        changeFilters({
          ...params,
          sort,
        }),
      );
    }
  }, []);

  //Запрашиваем пиццы после первого рендера
  useEffect(() => {
    window.scrollTo(0, 0);

    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      {isLoading === 'error' ? (
        <div style={{ marginBottom: 30 + 'px', textAlign: 'center' }}>
          <h2>Возникла ошибка</h2>
          <div>Не удалось загрузить пиццы</div>
        </div>
      ) : (
        <div className="content__items">
          {isLoading === 'loading'
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((item) => {
                return <PizzaItem {...item} key={item.id} />;
              })}
        </div>
      )}

      <Pagination onChangePage={(i) => onChangePage(i)} currentPage={currentPage} />
    </div>
  );
};

export default Home;
