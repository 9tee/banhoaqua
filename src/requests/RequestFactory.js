import CategoryRequest from './CategoryRequest';
import ProductRequest from './ProductRequest';
import LoginRequest from './LoginRequest';
import CartRequest from './CartRequest'

const requestMap = {
    CategoryRequest,
    ProductRequest,
    LoginRequest,
    CartRequest,
};

const instances = {};

export default class RequestFactory {
    static getRequest(classname) {
        const RequestClass = requestMap[classname];
        if (!RequestClass) {
            throw new Error(`Invalid request class name: ${classname}`);
        }

        let requestInstance = instances[classname];
        if (!requestInstance) {
            requestInstance = new RequestClass();
            instances[classname] = requestInstance;
        }
        return requestInstance;
    }
}