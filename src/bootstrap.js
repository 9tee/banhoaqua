import axios from 'axios'

export const BASEURL = 'http://192.168.2.51/v1'

window.axios = axios.create({
    baseURL: BASEURL,
    headers: {token: window.localStorage.getItem('token')}
  });