import BaseRequest from './BaseRequest';

const prefix = '/account'
 
class LoginRequest extends BaseRequest {
    login(data) {
        const url = `${prefix}/login`;
        return this.post(url,data);
    }
    checkToken(data){
        const url = `${prefix}/`
        return this.get(url,data);
    }
}

export default LoginRequest