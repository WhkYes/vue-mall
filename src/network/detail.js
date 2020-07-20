import {
  request
} from "./request.js"

export function getDetail(iid) {
  return request({
    url: "/api/mn/detail",
    params: {
      iid
    }
  })
}
