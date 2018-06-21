import { createStore, applyMiddleware } from 'redux';
import promiseMiddlware from 'redux-promise-middleware';
import productsReducer from './ducks/productsReducer';

const middleware = applyMiddleware(promiseMiddlware());

const store = createStore(productsReducer, middleware);

export default store;
