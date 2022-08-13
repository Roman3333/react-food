import React from 'react';

const ContactsComponent = () => {
  return (
    <div className="contacts">
      <h2 className="contacts__title">Наши Контакты:</h2>
      <p className="contacts__text">
        <strong>Адрес:</strong> Сибай, ул. Шевчука, 31
      </p>
      <p className="contacts__text">
        <strong>Телефон:</strong> 8 921 661 19 82
      </p>
      <p className="contacts__text">
        <strong>Мы работаем:</strong> Пн-Вс 09:00-22:00
      </p>
      <iframe
        className="contacts__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1208.0580097109046!2d58.665222860841006!3d52.73009880889053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d69dba8f26df7b%3A0xab001d811a1b29d!2z0KHQuNCx0LDQuSwg0KDQtdGB0L8uINCR0LDRiNC60L7RgNGC0L7RgdGC0LDQvQ!5e0!3m2!1sru!2sru!4v1660383193157!5m2!1sru!2sru"></iframe>
    </div>
  );
};

export default ContactsComponent;
