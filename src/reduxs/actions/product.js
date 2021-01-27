export const FETCH_SHOP = 'FETCH_SHOP';
export const FETCH_SHOP_SUCCEED = 'FETCH_SHOP_SUCCEED';
export const FETCH_PRODUCT = 'FETCH_PROPDUCT';
export const FETCH_PRODUCT_SUCCEED = 'FETCH_PRODUCT_SUCCEED';

export default {
    fetchShop = (data) => ({
        type: FETCH_SHOP,
        data,
    }),
    setShop = (data) => ({
        type: FETCH_SHOP_SUCCEED,
        data,
    }),
    fetchProduct = (data) => ({
        type:FETCH_PRODUCT,
        data,
    }),
    setProduct = (data) => ({
        type:FETCH_PRODUCT_SUCCEED,
        data,
    })

}