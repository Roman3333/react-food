import React, { memo } from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC<CategoriesProps> = memo(({ value, onChangeCategory }) => {
  console.log('categoryes');

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
});

export default Categories;
