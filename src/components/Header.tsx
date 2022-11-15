import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Input from '../components/Input';
import Form from '../components/Authentication/index';

import logoImg from './../assets/img/pizza-logo.svg';
import { ReactComponent as UserLogin } from '../assets/img/user-login.svg';
import { ReactComponent as Basket } from '../assets/img/basket.svg';

import { IBasketItem } from '../redux/basket/types';
import { RootState } from '../redux/store';

type HeaderList = {
  href: string;
  name: string;
};

type HeaderProps = {
  authVisible: boolean;
  setAuthVisible: (active: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ authVisible, setAuthVisible }) => {
  const [list] = useState<HeaderList[]>([
    { href: '/react-food/Stock', name: 'Акции' },
    { href: '/react-food/AboutUs', name: 'О кафе' },
    { href: '/react-food/Contacts', name: 'Контакты' },
    { href: '/react-food/Delivery', name: 'Доставка' },
  ]);
  const { pizzas, totalPrice } = useSelector((state: RootState) => state.basket);
  const isMounted = useRef(false);
  const location = useLocation();

  useEffect(() => {
    if (isMounted.current) {
      const pizzasJson = JSON.stringify(pizzas);
      localStorage.setItem('basket', pizzasJson);
    }

    isMounted.current = true;
  }, [pizzas]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__bottom">
          <Link to="/react-food">
            <div className="header__logo">
              <img width="38" height={38} src={logoImg} alt="Logo" />
              <div>
                <h1>React food</h1>
                <p>Самая вкусная еда</p>
              </div>
            </div>
          </Link>
          {location.pathname !== '/react-food/basket' && <Input />}
          <nav>
            <ul className="header__list">
              {list.map((item) => (
                <Link to={item.href} key={item.href} className="header__link">
                  <li className="header__item">{item.name}</li>
                </Link>
              ))}
            </ul>
          </nav>
          <div onClick={() => setAuthVisible(true)} className="header__login">
            <UserLogin />
            <span className="header__login-text">Войти</span>
          </div>
          {location.pathname !== '/react-food/basket' && (
            <div className="header__cart">
              <Link to="/react-food/basket" className="button button--cart">
                <span>{totalPrice} ₽</span>
                <div className="button__delimiter"></div>
                <Basket />
                <span>{pizzas.reduce((sum: number, obj: IBasketItem) => sum + obj.count, 0)}</span>
              </Link>
            </div>
          )}
        </div>
        <Form setAuthVisible={setAuthVisible} authVisible={authVisible} />
      </div>
    </header>
  );
};

export default Header;
