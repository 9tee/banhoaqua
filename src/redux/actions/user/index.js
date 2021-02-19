export const LOGIN = 'LOGIN'
export const LOGIN_SUCCEED = 'LOGIN_SUCCEED'
export const LOGIN_FAILED = 'LOGIN_FAILED'


export default {
  onLogin: (data) => ({
    type: LOGIN,
    data
  }),
  onLoginSucceed: (data) => ({
    type: LOGIN_SUCCEED,
    data,
  }),
  onLoginFailed: (err) => ({
    type: LOGIN_FAILED,
    err,
  }),
};