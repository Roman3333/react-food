import React from 'react';

import birthday from '../assets/img/birthday.png';

const Stock: React.FC = () => {
  return (
    <section className="stock">
      <div className="container">
        <div className="stock__inner">
          <div className="stock__item">
            <div className="stock__item_left">
              <img className="stock__item_left_img" src={birthday} alt="birthday" />
            </div>
            <div className="stock__item_right">
              <h4 className="stock__item_right_title">Именинникам скидка 10%</h4>
              <div className="stock__item-right_text">
                <p>Акция не распростроняется на алкоголь</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stock;
