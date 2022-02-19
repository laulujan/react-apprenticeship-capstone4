import { API_BASE_URL } from '../utils/constants';

const ACTIONS = {
  FETCH_FEATURED_PRODUCTS: 'FETCH_FEATURED_PRODUCTS',
  FETCH_FEATURED_PRODUCTS_SUCCESS: 'FETCH_FEATURED_PRODUCTS_SUCCESS',
  FETCH_FEATURED_PRODUCTS_ERROR: 'FETCH_FEATURED_PRODUCTS_ERROR',
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR',
  FETCH_CATEGORIES: 'FETCH_CATEGORIES',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_ERROR: 'FETCH_CATEGORIES_ERROR',
  SET_FILTERS: 'SET_FILTERS',
  UPDATE_PAGE: 'UPDATE_PAGE',
  FETCH_PRODUCT: 'FETCH_PRODUCT',
  FETCH_PRODUCT_SUCCESS: 'FETCH_PRODUCT_SUCCESS',
  FETCH_PRODUCT_ERROR: 'FETCH_PRODUCT_ERROR',
  GET_API_METADATA: 'GET_API_METADATA',
  GET_API_METADATA_SUCCESS: 'GET_API_METADATA_SUCCESS',
  GET_API_METADATA_ERROR: 'GET_API_METADATA_ERROR',
  SEARCH_PRODUCTS: 'SEARCH_PRODUCTS',
  SEARCH_PRODUCTS_SUCCESS: 'SEARCH_PRODUCTS_SUCCESS',
  SEARCH_PRODUCTS_ERROR: 'SEARCH_PRODUCTS_ERROR',
};

const getApiMetadata = (dispatch) => async () => {
  const controller = new AbortController();
  dispatch({ type: ACTIONS.GET_API_METADATA });
  try {
    const response = await fetch(API_BASE_URL, {
      signal: controller.signal,
    });
    const { refs: [{ ref } = {}] = [] } = await response.json();
    dispatch({
      type: ACTIONS.GET_API_METADATA_SUCCESS,
      payload: { apiMetadata: { ref, isLoading: false } },
    });
    return ref;
  } catch (error) {
    dispatch({
      type: ACTIONS.GET_API_METADATA_ERROR,
      payload: { error: error.error },
    });
  }
  return () => {
    controller.abort();
  };
};

const setFilters = (dispatch) => (filters) => {
  dispatch({
    type: ACTIONS.SET_FILTERS,
    payload: {
      filters: filters,
      currentPage: 1,
    },
  });
};

const updatePage = (dispatch) => (page) => {
  dispatch({
    type: ACTIONS.SET_FILTERS,
    payload: {
      currentPage: page,
    },
  });
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
  dispatch({ type: ACTIONS.FETCH_FEATURED_PRODUCTS });
  try {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "product")][at(document.tags, ["Featured"])]]'
      )}&lang=en-us&pageSize=16`
    );
    const products = await response.json();

    dispatch({
      type: ACTIONS.FETCH_FEATURED_PRODUCTS_SUCCESS,
      payload: {
        featuredProducts: products.results,
      },
    });
    return products;
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_FEATURED_PRODUCTS_ERROR,
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
      payload: {
        products: products.results,
        totalPages: products.total_pages,
        currentPage: page,
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

const fetchProductsByCategory =
  (dispatch) => async (apiRef, categories, page) => {
    dispatch({ type: ACTIONS.FETCH_PRODUCTS });
    try {
      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          `[[at(document.type, "product")][any(my.product.category, [${categories}])]]`
        )}&lang=en-us&pageSize=12&page=${page}`
      );
      const products = await response.json();

      dispatch({
        type: ACTIONS.FETCH_PRODUCTS_SUCCESS,
        payload: {
          products: products.results,
          totalPages: products.total_pages,
          currentPage: page,
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

const fetchProductById = (dispatch) => async (apiRef, id) => {
  dispatch({ type: ACTIONS.FETCH_PRODUCTS });
  try {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        `[[at(document.id,"${id}")]]`
      )}`
    );
    const product = await response.json();

    dispatch({
      type: ACTIONS.FETCH_PRODUCT_SUCCESS,
      payload: {
        product: product.results[0],
      },
    });
    return product;
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_PRODUCT_ERROR,
      payload: { error: error.error },
    });
    return error;
  }
};

const searchProducts = (dispatch) => async (apiRef, term) => {
  dispatch({ type: ACTIONS.SEARCH_PRODUCTS });
  try {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        `[[at(document.type, "product")][fulltext(document, "${term}")]]`
      )}`
    );
    const products = await response.json();

    dispatch({
      type: ACTIONS.SEARCH_PRODUCTS_SUCCESS,
      payload: {
        results: products.results,
        totalPages: products.total_pages,
      },
    });
    return products;
  } catch (error) {
    dispatch({
      type: ACTIONS.SEARCH_PRODUCTS_ERROR,
      payload: { error: error.error },
    });
    return error;
  }
};

export {
  ACTIONS,
  fetchCategories,
  fetchFeaturedProducts,
  fetchProducts,
  fetchProductsByCategory,
  setFilters,
  updatePage,
  fetchProductById,
  getApiMetadata,
  searchProducts,
};
