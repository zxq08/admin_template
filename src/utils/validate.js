/**
 * Created by PanJiaChen on 16/11/18.
 */
/**
 * Updated by zxq on 20/07/26
 */
import request from '@/utils/request'

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
  return request({
    url: '/vue-admin-template/user/isuser',
    method: 'get',
    params: str
  })
}
