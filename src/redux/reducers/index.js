import { combineReducers } from 'redux';
import category from './category';
import product from './product';
import user from './user';

const allReducers = combineReducers({
  category,
  product,
  user,
});

export default allReducers;