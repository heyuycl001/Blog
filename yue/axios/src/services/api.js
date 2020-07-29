import { _get, _post, _delete, _put } from './fetch'

// 请求示例
export const $get = params => _get(`/get/list`, params);
export const $post = params => _post('/post/item', params)
export const $delete = params => _delete('/delete/item', params)
export const $put = params => _put('/put/item', params)