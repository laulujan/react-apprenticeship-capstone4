import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import ProductList from '../pages/ProductList/ProductList';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import SearchResults from '../pages/SearchResults/SearchResults';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {['/', '/home'].map((path) => (
          <Route path={path} element={<Home />} key={path} />
        ))}
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/product/:id" element={<ProductDetail />} />
        <Route exact path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
