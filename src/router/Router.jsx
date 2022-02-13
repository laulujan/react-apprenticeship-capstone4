import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import ProductList from '../pages/ProductList/ProductList';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {['/', '/home'].map((path) => (
          <Route path={path} element={<Home />} key={path.index} />
        ))}
        <Route exact path="/products" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
