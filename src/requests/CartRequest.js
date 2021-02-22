import BaseRequest from './BaseRequest';

const prefix = '/cart'
 
class CartRequest extends BaseRequest {
    fetchCart() {
        const url = `${prefix}/`;
        return this.get(url);
    }
}

export default CartRequest