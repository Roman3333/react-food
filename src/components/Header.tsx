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

type HeaderProps = {
  authVisible: boolean;
  openAuth: () => void;
  closeAuth: () => void;
};

const Header: React.FC<HeaderProps> = ({ authVisible, openAuth, closeAuth }) => {
  const [list, setList] = useState<HeaderList[]>([
    { href: '/react-food/Stock', name: 'Акции' },
    { href: '/react-food/AboutUs', name: 'О кафе' },
    { href: '/react-food/Contacts', name: 'Контакты' },
    { href: '/react-food/Delivery', name: 'Доставка' },
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
          <ul className="header__list">
            {list.map((item) => (
              <Link to={item.href} key={item.href} className="header__link">
                <li className="header__item">{item.name}</li>
              </Link>
            ))}
          </ul>
          <div className="header__login">
            <svg width="22" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M404.816,308.113c-1.685-1.797-3.393-3.579-5.143-5.329c-29.761-29.762-66.236-50.37-106.007-60.423
			c42.048-20.964,71.004-64.411,71.004-114.5C364.669,57.358,307.311,0,236.809,0S108.948,57.358,108.948,127.86
			c0,50.089,28.957,93.536,71.004,114.5c-39.771,10.053-76.245,30.661-106.007,60.423c-43.502,43.502-67.46,101.341-67.46,162.864
			c0,5.633,4.566,10.199,10.199,10.199h309.072C344.472,497.944,372.406,512,403.564,512c56.216,0,101.951-45.735,101.951-101.951
			C505.515,354.251,460.456,308.787,404.816,308.113z M129.346,127.86c0-59.254,48.208-107.462,107.463-107.462
			c59.255,0,107.462,48.208,107.462,107.462c0,59.254-48.208,107.463-107.462,107.463
			C177.555,235.323,129.346,187.116,129.346,127.86z M27.128,455.448c5.338-111.036,97.347-199.727,209.681-199.727
			c54.695,0,104.564,21.035,141.963,55.431c-44.274,11.103-77.159,51.23-77.159,98.897c0,16.302,3.852,31.72,10.686,45.4H27.128z
			 M403.564,491.602c-44.968,0-81.553-36.585-81.553-81.553c0-44.968,36.585-81.553,81.553-81.553
			c44.968,0,81.553,36.585,81.553,81.553C485.117,455.017,448.532,491.602,403.564,491.602z"
              />
              <path
                d="M456.996,404.572l-32.881-32.883c-3.983-3.983-10.441-3.983-14.425,0c-3.983,3.983-3.983,10.441,0,14.425l15.584,15.584
			h-63.457c-5.633,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h63.231l-15.358,15.358
			c-3.983,3.983-3.984,10.441,0,14.424c1.992,1.992,4.602,2.987,7.212,2.987s5.221-0.996,7.212-2.987l32.882-32.882
			c1.912-1.912,2.987-4.507,2.987-7.212C459.983,409.079,458.908,406.484,456.996,404.572z"
              />
            </svg>

            <span className="header__login-text">Войти</span>
          </div>
          <div className="header__cart">
            {location.pathname !== '/react-food/basket' && (
              <Link to="/react-food/basket" className="button button--cart">
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
    </header>
  );
};

export default Header;
