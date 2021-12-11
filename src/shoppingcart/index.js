import ShoppingCart from './components/ShoppingCart';

import {connect} from 'react-redux';



const mapStateToProps = (state) => {
  const products = state.products;
  const productsOnCard = Object.entries(state.shopppingcart.products)

  return {
    products: productsOnCard.map(([key, value]) => {
       const product = products[key]
      product.quantity = value;
    return product
    })
  }

}

export default connect(mapStateToProps)(ShoppingCart);