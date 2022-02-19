import React, { useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import CardContainer from '../../components/CardContainer/CardContainer';
import { Container } from './ProductList.styled';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';
import { useProducts } from '../../provider/Provider';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
  const [searchParams] = useSearchParams();

  const {
    fetchProducts,
    products,
    categories,
    loading,
    fetchCategories,
    fetchProductsByCategory,
    filters,
    currentPage,
    apiMetadata,
  } = useProducts();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = apiMetadata;

  const formatCategories = (categoriesParams) => {
    if (!categoriesParams) {
      return '';
    }
    //convert categories to array [name]
    let categoriesParamsArr = categoriesParams.split(',');

    let result = [];

    //iterate categories array
    categoriesParamsArr.map((categoryParam) => {
      // Find id from name in categories catalog
      categories.map((categorCatalog) => {
        if (
          categoryParam === categorCatalog.data.name ||
          categorCatalog.data.name.includes(categoryParam)
        ) {
          result.push(categorCatalog.id);
        }
      });
    });

    //Format result to string valid for use in prismic
    return result.map((element) => `"${element}"`).join(',');
  };
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    if (categories.length < 1) {
      fetchCategories(apiRef);
    }

    let categoriesParams = searchParams.get('category');

    if (categoriesParams) {
      fetchProductsByCategory(
        apiRef,
        formatCategories(categoriesParams),
        currentPage
      );
    } else {
      fetchProducts(apiRef, currentPage);
    }
  }, [isApiMetadataLoading, currentPage, filters]);

  return (
    <Container>
      <Sidebar categories={categories} />

      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <h2>Product List</h2>
            <CardContainer products={products} />
            <Pagination page={currentPage} />
          </>
        )}
      </div>
    </Container>
  );
};

export default ProductList;
