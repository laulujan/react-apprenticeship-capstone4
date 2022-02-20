import React, { useEffect } from 'react';
import CardContainer from '../../components/CardContainer/CardContainer';
import { useProducts } from '../../provider/Provider';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import { Container, Box } from './SearchResults.styled';

const SearchResults = () => {
  const { results, loading, currentPage, searchProducts, term, apiMetadata } =
    useProducts();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = apiMetadata;

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    searchProducts(apiRef, term, currentPage);
  }, [isApiMetadataLoading, currentPage, term]);
  return (
    <Container>
      <h2>Results:</h2>
      {loading && <Loader />}
      {results.length > 0 ? (
        <>
          <CardContainer products={results} />
          <Pagination page={currentPage} />
        </>
      ) : (
        <Box>No items found</Box>
      )}
    </Container>
  );
};

export default SearchResults;
