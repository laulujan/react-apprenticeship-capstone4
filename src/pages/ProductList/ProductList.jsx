import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import CardContainer from '../../components/CardContainer/CardContainer';
import { Container } from './ProductList.styled';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';
import { useProducts } from '../../provider/Provider';
import { useLatestAPI } from '../../utils/hooks/useLatestAPI';

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [page, setPage] = useState(1);
  const { fetchProducts, products, categories, loading } = useProducts();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    fetchProducts(apiRef, page);
  }, [isApiMetadataLoading, loading, page]);

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
            <Pagination page={page} setPage={setPage} />
          </>
        )}
      </div>
    </Container>
  );
};

export default ProductList;
