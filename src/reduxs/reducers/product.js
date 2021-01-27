import {FETCH_SHOP_SUCCEED,FETCH_PRODUCT_SUCCEED} from '../actions/product';

export default (
    state = {
        shop: [],
        product: {},
      }, action,
) => {
    switch (action.type) {
        case FETCH_SHOP_SUCCEED:
          return {
            ...state,
            shop: action.data,
          };
        case FETCH_PRODUCT_SUCCEED:
          return {
            ...state,
            product: action.data,
          };
        default:
          return {
            ...state,
          };
      }
}