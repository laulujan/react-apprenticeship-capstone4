import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import ProductList from '../pages/ProductList/ProductList';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/products" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
