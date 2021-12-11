import ShoppingCart from './components/ShoppingCart';

import {connect} from 'react-redux';
import {checkout} from './actions';



const mapStateToProps = (state) => {
  const products = state.products;
  const productsOnCard = Object.entries(state.shopppingcart.products)

  return {
    products: productsOnCard.map(([key, value]) => {
    return { ...products[key], quantity: value };
    })
  }

}

export default connect(mapStateToProps, {onCheckoutClicked: checkout})(ShoppingCart);