import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Header from './components/Header';
import Home from './pages/Home';
import './scss/app.scss';

const Basket = React.lazy(() => import(/* webpackChunkName: "Basket" */ './pages/Basket'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));
const PizzaPage = Loadable({
  loader: () => import(/* webpackChunkName: "FullPizzaPage" */ './pages/PizzaPage'),
  loading: () => <div>Загрузка...</div>,
});

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/pizza-react" element={<Home />} />
          <Route
            path="/basket"
            element={
              <Suspense fallback={<div>Загрузка корзины</div>}>
                <Basket />
              </Suspense>
            }
          />
          <Route path="/pizza/:id" element={<PizzaPage />} />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
