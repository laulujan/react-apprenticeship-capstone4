import { ACTIONS } from './Actions';

export const initialState = {
  loading: false,
  error: false,
  featuredProducts: [],
  products: [],
  categories: [],
  totalPages: null,
  currentPage: 1,
  filters: '',
  product: {},
  apiMetadata: { ref: null, isLoading: true },
  results: [],
  term: '',
};

export function productsReducer(state, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case ACTIONS.FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ACTIONS.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload.products,
        totalPages: payload.totalPages,
      };
    case ACTIONS.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case ACTIONS.FETCH_FEATURED_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ACTIONS.FETCH_FEATURED_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        featuredProducts: payload.featuredProducts,
      };
    case ACTIONS.FETCH_FEATURED_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case ACTIONS.FETCH_PRODUCT:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ACTIONS.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: payload.product,
      };
    case ACTIONS.FETCH_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case ACTIONS.FETCH_CATEGORIES:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ACTIONS.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload.categories,
      };
    case ACTIONS.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case ACTIONS.GET_API_METADATA:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ACTIONS.GET_API_METADATA_SUCCESS:
      return {
        ...state,
        loading: false,
        apiMetadata: payload.apiMetadata,
      };
    case ACTIONS.GET_API_METADATA_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case ACTIONS.SEARCH_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ACTIONS.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: payload.results,
        totalPages: payload.totalPages,
      };
    case ACTIONS.SEARCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case ACTIONS.SET_FILTERS:
      return {
        ...state,
        filters: payload.filters,
        currentPage: payload.currentPage,
      };
    case ACTIONS.SET_TERM:
      return {
        ...state,
        term: payload.term,
        currentPage: payload.currentPage,
      };
    case ACTIONS.UPDATE_PAGE:
      return {
        ...state,
        currentPage: payload.currentPage,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
