import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

import './scss/app.scss';

const Basket = React.lazy(() => import(/* webpackChunkName: "Basket" */ './pages/Basket'));
const Stock = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/Stock'));
const AboutUs = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/AboutUs'));
const Contacts = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/Contacts'));
const Delivery = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/Delivery'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));
const FullItemPage = Loadable({
  loader: () => import(/* webpackChunkName: "FullPizzaPage" */ './pages/FullItemPage'),
  loading: () => <div>Загрузка...</div>,
});

function App() {
  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuth = () => {
    setAuthVisible(true);
  };

  const closeAuth = () => {
    setAuthVisible(false);
  };
  return (
    <div className="wrapper">
      <Header openAuth={openAuth} closeAuth={closeAuth} authVisible={authVisible} />
      <div className="content">
        <Routes>
          <Route path="/react-food" element={<Home />} />
          <Route
            path="/react-food/stock"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Stock />
              </Suspense>
            }
          />
          <Route
            path="/react-food/aboutUs"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="/react-food/contacts"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Contacts />
              </Suspense>
            }
          />
          <Route
            path="/react-food/delivery"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Delivery />
              </Suspense>
            }
          />
          <Route
            path="/react-food/basket"
            element={
              <Suspense fallback={<div>Загрузка корзины</div>}>
                <Basket />
              </Suspense>
            }
          />
          <Route path="/react-food/pizza/:id" element={<FullItemPage />} />
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
      <Footer />
    </div>
  );
}

export default App;
