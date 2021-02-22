import { combineReducers } from 'redux';
import category from './category';
import product from './product';
import user from './user';
import cart from './cart';

const allReducers = combineReducers({
  category,
  product,
  user,
  cart,
});

export default allReducers;