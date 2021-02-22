export const FETCH_CART = 'FETCH_CART';
export const FETCH_CART_SUCCEED = 'FETCH_CART_SUCCEED';
export const FETCH_CART_FAILED = 'FETCH_CART_FAILED';
export const ADD_CART = 'ADD_CART';

export default {
    onFetchCart: (data,callback) => ({
      type: FETCH_CART,
      data,
      callback,
    }),
    onFetchCartSucceed: (data) => ({
      type: FETCH_CART_SUCCEED,
      data,
    }),
    onFetchCartFailed: (err) => ({
      type: FETCH_CART_FAILED,
      err,
    }),
    onAddCart: (data) => ({
      type:ADD_CART,
      data
    })
  };