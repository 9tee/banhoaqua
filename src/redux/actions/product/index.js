export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCEED = 'FETCH_PRODUCTS_SUCCEED'
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'

export const FETCH_PRODUCT = 'FETCH_PRODUCT'
export const FETCH_PRODUCT_SUCCEED = 'FETCH_PRODUCT_SUCCEED'
export const FETCH_PRODUCT_FAILED = 'FETCH_PRODUCT_FAILED'

export default {
    onFetchProducts: (data) => ({
      type: FETCH_PRODUCTS,
      data,
    }),
    onFetchProductsSucceed: (data) => ({
      type: FETCH_PRODUCTS_SUCCEED,
      data,
    }),
    onFetchProductsFailed: (err) => ({
      type: FETCH_PRODUCTS_FAILED,
      err,
    }),
    onFetchProduct: (data) => ({
      type: FETCH_PRODUCT,
      data,
    }),
    onFetchProductSucceed: (data) => ({
      type: FETCH_PRODUCT_SUCCEED,
      data,
    }),
    onFetchProductFailed: (err) => ({
      type: FETCH_PRODUCT_FAILED,
      err,
    }),
  };