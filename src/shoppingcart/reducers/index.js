import { ADD_TO_CART } from "../constants";
import produce from 'immer';

const initialState = {
  products: {},
};

const reducer = produce((draft = initialState, action) => {
  const {type, product} = action;
  if(type === ADD_TO_CART) {
    const productId = product.id;

    if(draft.products[productId]){
      draft.products[product.id] = ++draft.products[product.id] || 1;
    }

    return draft;
  }
});

export default reducer;