import {
  _post,
  _get,
  _put,
  _delete
} from './index'

//接口方法示例
export const $post = params => _post(`/xxx/xxx/{id}`, params);
export const $get = params => _get(`/xxx/xxx/{id}`, params);
export const $put = params => _put(`/xxx/xxx`, params);
export const $delete = params => _delete(`/xxx/xxx`, params);