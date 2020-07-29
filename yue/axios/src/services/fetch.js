import axios from 'axios'
import { Message } from 'element-ui';
import router from '../router/index'

let baseUrl = '';
switch (document.domain) {
  case 'xxx.xx.xxx.xxx':
    baseUrl = 'http://xxx.xx.xxx.xxx:xxxxx'
    break;
  default:
    baseUrl = ''
}
let baseURL = process.env.NODE_ENV === 'development' ? '/api' : baseUrl;
const instance = axios.create({
  baseURL,
  timeout: 1000,
  withCredentials: true
});

//请求拦截（配置发送的参数）
instance.interceptors.request.use(config => {
  let token = localStorage.getItem('mytoken')
  token && config.headers['token'];
  return config;
}, error => {
  return Promise.reject(error);
});

//响应拦截（配置返回的数据）
instance.interceptors.response.use(res => {
  if (res.data.status == 60107) {
    Message({
      message: '登录过期，请重新登录',
      type: 'error',
      duration: 500
    });
    localStorage.removeItem("mytoken");
    setTimeout(() => {
      router.push('/login');
    }, 500);
    // return res.data;
  }
  return res.data;
}, error => {
  return Promise.reject(error)
});


const _get = (url, data = {}) => {
  return instance.get(url, { params: data })
}
const _post = (url, data = {}) => {
  return instance.post(url, data)
}
const _put = (url, data = {}) => {
  return instance.put(url, data)
}

const _delete = (url, id = '') => {
  return instance.delete(url + '/' + id)
}

export {
  _get,
  _post,
  _put,
  _delete
}
