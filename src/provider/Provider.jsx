import React, { useContext, useReducer } from 'react';
import { ProductsContext } from './Context';
import {
  fetchCategories,
  fetchFeaturedProducts,
  fetchProductById,
  fetchProducts,
  fetchProductsByCategory,
  setFilters,
  setTerm,
  updatePage,
  getApiMetadata,
  searchProducts,
  addToCart,
  removeFromCart,
  updateCart,
} from './Actions';
import { productsReducer, initialState } from './Reducer';

function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(`Can't use "useProducts" without a Products Provider`);
  }
  return context;
}

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const value = {
    products: state.products,
    featuredProducts: state.featuredProducts,
    categories: state.categories,
    error: state.error,
    totalPages: state.totalPages,
    currentPage: state.currentPage,
    filters: state.filters,
    product: state.product,
    loading: state.loading,
    apiMetadata: state.apiMetadata,
    results: state.results,
    term: state.term,
    cartItems: state.cartItems,
    updatePage: updatePage(dispatch),
    setFilters: setFilters(dispatch),
    setTerm: setTerm(dispatch),
    fetchCategories: fetchCategories(dispatch),
    fetchFeaturedProducts: fetchFeaturedProducts(dispatch),
    fetchProducts: fetchProducts(dispatch),
    fetchProductsByCategory: fetchProductsByCategory(dispatch),
    fetchProductById: fetchProductById(dispatch),
    getApiMetadata: getApiMetadata(dispatch),
    searchProducts: searchProducts(dispatch),
    addToCart: addToCart(dispatch),
    removeFromCart: removeFromCart(dispatch),
    updateCart: updateCart(dispatch),
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { useProducts };
export default ProductsProvider;
