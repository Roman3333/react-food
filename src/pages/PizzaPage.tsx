import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const PizzaPage: React.FC = () => {
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
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link to="/pizza-react">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default PizzaPage;
