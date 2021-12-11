import ProductList from './components/ProductList';
import {connect} from 'react-redux';
import {addToCard} from './actions';
import {createSelector} from 'reselect';

const selectProducts = state => state.products;
const productResult = (products) => Object.values(products);
const selectProductsSelector = createSelector(
  selectProducts,
  productResult
)

const mapStateToProps = (state) => {
  return {
    products: selectProductsSelector(state),
  }
}

export default connect(mapStateToProps,{onAddToCartClicked: addToCard})(ProductList)