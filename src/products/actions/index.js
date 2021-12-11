import { RECEIVE_PRODUCTS, ADD_TO_CART} from '../constants';
import {retrieveProducts} from '../repositories/ProductsRepository';

export const listProducts = () => async (dispatch) => {
  const products = await retrieveProducts();

  dispatch({
    type: RECEIVE_PRODUCTS,
    products,
  })
}

export const addToCard = (product) =>{
  return {
    type: ADD_TO_CART,
    product,
  }
}