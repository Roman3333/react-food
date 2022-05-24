import React, { useState } from 'react';

function Categories() {
  const [activeCategories, setActiveGategories] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const changeCategories = (index) => {
    setActiveGategories(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              className={index == activeCategories ? 'active' : ''}
              onClick={() => changeCategories(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
