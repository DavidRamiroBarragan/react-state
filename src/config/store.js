import {createStore, combineReducers, applyMiddleware} from "redux";
import productsReducer from "../products/reducers"
import shoppingCartReducer from "../shoppingcart/reducers";

import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger/src';
import {composeWithDevTools} from 'redux-devtools-extension';


const middlewares = [thunk];

if(process.env.NODE_ENV !== "production"){
  middlewares.push(createLogger)
}

const store = createStore(
  combineReducers({
    products: productsReducer,
    shopppingcart: shoppingCartReducer,
  }),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;