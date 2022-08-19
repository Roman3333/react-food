import React from 'react';

import food from '../assets/img/food.jpg';

const Delivery: React.FC = () => {
  return (
    <section className="delivery">
      <div className="container">
        <div className="delivery__inner">
          <div className="delivery__box-img">
            <img src={food} alt="many food" />
          </div>
          <div className="delivery__info">
            <h2 className="delivery__title">Доставка еды в Сибае</h2>

            <div className="delivery__box-text">
              <p className="delivery__text">
                Доставка еды в нашем кафе осуществляется во все районы Сибая. Бесплатная доставка от
                700 рублей.
              </p>
              <p className="delivery__text">
                Доставка по городу 90 рублей, в поселки от 140 рублей. Для этого свяжитесь с нами по
                номеру телефона{' '}
                <a className="delivery__phone" href="tel:+79216611982">
                  +7(921) 661-19-82
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
