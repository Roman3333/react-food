import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Instagram } from '../assets/img/instagram.svg';
import { ReactComponent as YouTube } from '../assets/img/youtube.svg';
import { ReactComponent as Vkontakte } from '../assets/img/vk.svg';
import { ReactComponent as Odnoklassniki } from '../assets/img/odnoklassniki.svg';

type FooterLinks = {
  href: string;
  name: string;
};

type FooterSocials = {
  href: string;
  name: string;
  svg?: any;
};

const Footer: FC = () => {
  const [listLinks] = useState<FooterLinks[]>([
    { href: '/react-food/Stock', name: 'Акции' },
    { href: '/react-food/AboutUs', name: 'О кафе' },
    { href: '/react-food/Contacts', name: 'Контакты' },
    { href: '/react-food/Delivery', name: 'Доставка' },
  ]);
  const [listSocials] = useState<FooterSocials[]>([
    {
      href: 'https://www.instagram.com/krematorium90/',
      name: 'Instagram',
      svg: <Instagram />,
    },
    {
      href: '#',
      name: 'YouTube',
      svg: <YouTube />,
    },
    {
      href: '#',
      name: 'Vkontakte',
      svg: <Vkontakte />,
    },
    {
      href: '#',
      name: 'Odnoklassniki',
      svg: <Odnoklassniki />,
    },
  ]);

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__inner-socials">
          <ul className="footer__inner-socials-list">
            <li>Мы в соцсетях</li>
            {listSocials.map((social, index) => (
              <li className="footer__inner-socials-item" key={index}>
                <a className="footer__inner-socials-link" href={social.href}>
                  {social.svg}
                  <span>{social.name}</span>
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
