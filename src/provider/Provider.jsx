import React, { useContext, useReducer } from 'react';
import { ProductsContext } from './Context';
import {
  fetchCategories,
  fetchFeaturedProducts,
  fetchProducts,
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
    categories: state.categories,
    error: state.error,
    totalPages: state.totalPages,
    fetchCategories: fetchCategories(dispatch),
    fetchFeaturedProducts: fetchFeaturedProducts(dispatch),
    fetchProducts: fetchProducts(dispatch),
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { useProducts };
export default ProductsProvider;
