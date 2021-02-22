import {
    FETCH_CART_SUCCEED,
} from '../actions/cart';


export default (
  state = {
    cart:[],
  },
  action,
) => {
  switch (action.type) {
    case FETCH_CART_SUCCEED:{
        return  {
            ...state,
            cart: action.data,
        }
    }
    default:
      return {
        ...state,
      };
  }
};