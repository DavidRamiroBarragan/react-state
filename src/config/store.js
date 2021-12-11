import {createStore, combineReducers} from "redux";
import productsReducer from "../products/reducers"
import shoppingCartReducer from "../shoppingcart/reducers";


const store = createStore(
  combineReducers({
    products: productsReducer,
    shopppingcart: shoppingCartReducer,
  }),
);

export default store;