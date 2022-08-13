import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from './../assets/img/pizza-logo.svg';

const Footer: React.FC = () => {
  type FooterLinks = {
    href: string;
    name: string;
  };

  type FooterSocials = {
    href: string;
    name: string;
  };

  const [listLinks, setList] = useState<FooterLinks[]>([
    { href: '/react-food/Stock', name: 'Акции' },
    { href: '/react-food/AboutUs', name: 'О кафе' },
    { href: '/react-food/Contacts', name: 'Контакты' },
    { href: '/react-food/Delivery', name: 'Доставка' },
  ]);

  const [listSocials, seSocials] = useState<FooterSocials[]>([
    { href: 'https://www.instagram.com/krematorium90/', name: 'Instagram' },
    { href: '#', name: 'YouTube' },
    { href: '#', name: 'Vkontakte' },
    { href: '#', name: 'Одноклассники' },
  ]);

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__inner-socials">
          <ul className="footer__inner-socials-list">
            <li>Мы в соцсетях</li>
            {listSocials.map((item) => (
              <li className="footer__inner-socials-item" key={item.name}>
                <a className="footer__inner-socials-link" href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__inner-items">
          <ul className="footer__inner-items-list">
            <li>Меню</li>
            {listLinks.map((item) => (
              <Link to={item.href} key={item.href} className="footer__inner-items-link">
                <li className="footer__inner-items-item">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="footer__inner-contacts">
          <h3 className="footer__inner-contacts-title">Наши Контакты:</h3>
          <p className="footer__inner-contacts-text">
            <strong>Адрес:</strong> Сибай, ул. Шевчука, 31
          </p>
          <p className="footer__inner-contacts-text">
            <strong>Телефон:</strong> 8 921 661 19 82
          </p>
          <p className="footer__inner-contacts-text">
            <strong>Мы работаем:</strong> Пн-Вс 09:00-22:00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
