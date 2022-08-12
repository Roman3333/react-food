import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logoImg from './../assets/img/pizza-logo.svg';
import Input from '../components/Input';

import { RootState } from '../redux/store';

type HeaderList = {
  href: string;
  name: string;
};

const Header: React.FC = () => {
  const [list, setList] = useState<HeaderList[]>([
    { href: '/Stock', name: 'Акции' },
    { href: '/AboutUs', name: 'О кафе' },
    { href: '/Contacts', name: 'Контакты' },
    { href: '/Delivery', name: 'Доставка' },
  ]);
  const isMounted = useRef(false);
  const pizzas = useSelector((state: RootState) => state.basket.pizzas);
  const totalPrice = pizzas.reduce((sum: number, obj: any) => sum + obj.price * obj.count, 0);
  const location = useLocation();

  useEffect(() => {
    if (isMounted.current) {
      const pizzasJson = JSON.stringify(pizzas);
      localStorage.setItem('basket', pizzasJson);
    }

    isMounted.current = true;
  }, [pizzas]);

  return (
    <div className="header">
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
          {location.pathname !== '/basket' && <Input />}
          <ul className="header__list">
            {list.map((item) => (
              <Link to={item.href} key={item.href} className="header__link">
                <li className="header__item">{item.name}</li>
              </Link>
            ))}
          </ul>
          <div className="header__cart">
            {location.pathname !== '/basket' && (
              <Link to="/basket" className="button button--cart">
                <span>{totalPrice} ₽</span>
                <div className="button__delimiter"></div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path
                    d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path
                    d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </svg>
                <span>{pizzas.reduce((sum: number, obj: any) => sum + obj.count, 0)}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;