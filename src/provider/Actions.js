import { API_BASE_URL } from '../utils/constants';

const ACTIONS = {
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR',
  FETCH_CATEGORIES: 'FETCH_CATEGORIES',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_ERROR: 'FETCH_CATEGORIES_ERROR',
};

const fetchCategories = (dispatch) => async (apiRef) => {
  dispatch({ type: ACTIONS.FETCH_CATEGORIES });
  try {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "category")]]'
      )}&lang=en-us&pageSize=30`
    );
    const categories = await response.json();

    dispatch({
      type: ACTIONS.FETCH_CATEGORIES_SUCCESS,
      payload: {
        categories: categories.results,
      },
    });
    return categories;
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_CATEGORIES_ERROR,
      payload: { error: error.error },
    });
    return error;
  }
};

const fetchFeaturedProducts = (dispatch) => async (apiRef) => {
  dispatch({ type: ACTIONS.FETCH_PRODUCTS });
  try {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "product")][at(document.tags, ["Featured"])]]'
      )}&lang=en-us&pageSize=16`
    );
    const products = await response.json();

    dispatch({
      type: ACTIONS.FETCH_PRODUCTS_SUCCESS,
      payload: {
        products: products.results,
      },
    });
    return products;
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_PRODUCTS_ERROR,
      payload: { error: error.error },
    });
    return error;
  }
};

const fetchProducts = (dispatch) => async (apiRef, page) => {
  dispatch({ type: ACTIONS.FETCH_PRODUCTS });
  try {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&lang=en-us&pageSize=12&page=${page}`
    );
    const products = await response.json();

    dispatch({
      type: ACTIONS.FETCH_PRODUCTS_SUCCESS,
      payload: { products: products.results, totalPages: products.total_pages },
    });
    return products;
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_PRODUCTS_ERROR,
      payload: { error: error.error },
    });
    return error;
  }
};

export { ACTIONS, fetchCategories, fetchFeaturedProducts, fetchProducts };
