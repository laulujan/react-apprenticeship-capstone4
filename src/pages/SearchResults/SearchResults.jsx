import React, { useEffect } from 'react';
import CardContainer from '../../components/CardContainer/CardContainer';
import { useProducts } from '../../provider/Provider';
import Loader from '../../components/Loader/Loader';

const SearchResults = () => {
  const { results, loading } = useProducts();

  useEffect(() => {
    return () => {};
  }, [loading, results]);
  return (
    <div>
      {loading && <Loader />}
      {results.length > 0 ? (
        <CardContainer products={results} />
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default SearchResults;
