import axios from 'axios';
import {BASE_URL} from './constants';
import qs from 'qs';

window.axios = axios.create({
  baseURL: BASE_URL,
  paramsSerializer(params) {
    return qs.stringify(params);
  },
});