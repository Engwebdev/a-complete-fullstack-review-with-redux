import axios from 'axios';

//ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

//ACTION CREATORS
export function getProducts() {
  return {
    type: GET_PRODUCTS,
    payload: axios.get('/api/products')
  };
}

export function addProduct(obj) {
  return {
    type: ADD_PRODUCT,
    payload: axios.post('/api/products', obj)
  };
}

//INITIAL STATE
const initialState = {
  products: [],
  isLoading: false,
  error: ''
};

//REDUCER FUNCTION
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS_PENDING':
      return { ...state, isLoading: true };
    case 'GET_PRODUCTS_FULFILLED':
      return { ...state, isLoading: false, products: action.payload.data };
    case 'GET_PRODUCTS_REJECTED':
      return { ...state, isLoading: true, error: action.payload };

    case 'ADD_PRODUCT_PENDING':
      return { ...state, isLoading: true };
    case 'ADD_PRODUCT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        products: [...state.products, action.payload.data]
      };
    case 'ADD_PRODUCT_REJECTED':
      return { ...state, isLoading: true, error: action.payload };
    default:
      return state;
  }
}
