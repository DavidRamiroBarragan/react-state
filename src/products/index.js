import ProductList from './components/ProductList';
import {connect} from 'react-redux';
import {addToCard} from './actions';

const mapStateToProps = (state) => {
  const products = Object.values(state.products);

  return {
    products,
  }
}

export default connect(mapStateToProps,{onAddToCartClicked: addToCard})(ProductList)