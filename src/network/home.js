import {
  request
} from './request'


export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: "/api/mn/home/data",
    params: {
      type: type,
      page: page
    }
  })
}
