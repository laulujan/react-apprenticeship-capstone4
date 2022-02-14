import { ACTIONS } from './Actions';

export const initialState = {
  loading: false,
  error: false,
  products: [],
  categories: [],
  totalPages: null,
  currentPage: 1,
  filters: '',
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
    case ACTIONS.SET_FILTERS:
      return {
        ...state,
        filters: payload.filters,
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
