import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const FullItemPage: React.FC = () => {
  const [pizza, setPizza] = useState<{ imageUrl: string; title: string; price: number }>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function givePizza() {
      try {
        const { data } = await axios.get('https://628e2b15368687f3e711a7d0.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка, не удалось загрузить пиццу');
        navigate('/');
      }
    }

    givePizza();
  }, []);

  if (!pizza) {
    return <>Идет загрузка</>;
  }

  return (
    <div className="container">
      <div className="item-page">
        <img src={pizza.imageUrl} />
        <div className="item-page__info">
          <h2 className="item-page__info-title">{pizza.title}</h2>
          <h4 className="item-page__info-price">{pizza.price} ₽</h4>
          <p className="item-page__info-text">
            Здесь могла бы быть ваша реклама Здесь могла бы быть ваша реклама Здесь могла бы быть
            ваша реклама Здесь могла бы быть ваша реклама Здесь могла бы быть ваша рекламаЗдесь
            могла бы быть ваша реклама Здесь могла бы быть ваша реклама Здесь могла бы быть ваша
            реклама Здесь могла бы быть ваша реклама Здесь могла бы быть ваша реклама Здесь могла бы
            быть ваша реклама Здесь могла бы быть ваша реклама
          </p>
        </div>
      </div>

      <Link to="/react-food">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullItemPage;
