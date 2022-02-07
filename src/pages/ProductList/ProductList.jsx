import React, { useState, useEffect } from 'react';
import { fetchdata } from '../../api/fetchData';
import Sidebar from '../../components/Sidebar/Sidebar';
import CardContainer from '../../components/CardContainer/CardContainer';
import { Container } from './ProductList.styled';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';

const ProductList = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchdata(
      'https://raw.githubusercontent.com/wizelineacademy/react-apprenticeship-capstone4/main/mocks/en-us/product-categories.json'
    ).then((data) => setCategories(data.results));
  }, []);
  useEffect(() => {
    fetchdata(
      'https://raw.githubusercontent.com/wizelineacademy/react-apprenticeship-capstone4/main/mocks/en-us/products.json'
    ).then((data) => setProducts(data.results));
  }, []);

  const filter = () => {
    const activeFiltersSet = new Set(activeFilters);

    const result = products.filter((o) => {
      return activeFiltersSet.has(o.data.category.id);
    });

    return result;
  };
  useEffect(() => {
    const result = filter();
    setFilteredProducts(result);
  }, [activeFilters]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [loading]);

  return (
    <Container>
      <Sidebar categories={categories} setActiveFilters={setActiveFilters} />

      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <h2>Product List</h2>
            <CardContainer
              products={
                filteredProducts.length < 1 ? products : filteredProducts
              }
              activeFilters={activeFilters}
            />
            <Pagination />
          </>
        )}
      </div>
    </Container>
  );
};

export default ProductList;
