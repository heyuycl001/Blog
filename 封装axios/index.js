import axios from 'axios'
import {
  Message
} from 'element-ui';
import router from '../router/index'

axios.defaults.withCredentials = true;

let nodeenv = process.env.NODE_ENV;
let baseUrl = '';
switch (document.domain) {
  case '182.92.209.121':
    baseUrl = 'http://182.92.209.121:8089'
    break;
}
axios.defaults.baseURL = nodeenv === 'development' ? '/api' : baseUrl;

//请求拦截（配置发送的参数）
axios.interceptors.request.use(config => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  config.headers['token'] = userInfo ? userInfo.token : null;
  return config;
}, error => {
  return Promise.reject(error);
});

//响应拦截（配置返回的数据）
axios.interceptors.response.use(res => {
  if (res.data.status == 60107) {
    Message({
      message: '登录过期，请重新登录',
      type: 'error',
      duration: 500
    });
    localStorage.removeItem("userInfo");
    setTimeout(() => {
      router.push('/login');
    }, 500);
    return;
  }
  if (res.data.status == 500) {
    Message({
      message: '服务内部错误，请联系管理员',
      type: 'error'
    });
    return;
  }
  return res.data;
}, error => {
  console.log(error)
  return Promise.reject(error)
});

//接口请求方法
function httpParams(url, data) {
  let param = {};
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      if (url.indexOf('{' + key + '}') === -1) {
        if (Object.prototype.toString.call(data[key]) === '[object Object]') {
          param = data[key];
        } else {
          param = data;
        }
      } else {
        url = url.replace('{' + key + '}', `${data[key]}`);
      }
    }
  }
  return {
    url,
    data: param
  };
}
export const _post = (url, data = {}) => {
  let params = httpParams(url, data);
  return axios.post(params.url, params.data)
};
export const _get = (url, data = {}) => {
  let params = httpParams(url, data);
  return axios.get(params.url, {
    params: params.data
  })
};
export const _put = (url, data = {}) => {
  let params = httpParams(url, data);
  return axios.put(params.url, params.data)
};
export const _delete = (url, data = {}) => {
  let params = httpParams(url, data);
  return axios.delete(params.url, {
    data: params.data
  })
};