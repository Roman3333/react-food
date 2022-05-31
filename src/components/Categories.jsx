import React from 'react';

function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              className={index === value ? 'active' : ''}
              onClick={() => onChangeCategory(index)}
              key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
