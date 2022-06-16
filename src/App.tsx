import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Basket from './pages/Basket';
import NotFound from './pages/NotFound';
import PizzaPage from './pages/PizzaPage';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/pizza-react" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/pizza/:id" element={<PizzaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
