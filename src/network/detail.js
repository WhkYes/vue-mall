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
export function getRecommend() {
  return request({
    url: "/api/mn/recommend"
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    // 商品名称
    this.title = itemInfo.title
    // 商品描述
    this.desc = itemInfo.desc
    // 商品价格
    this.newPrice = itemInfo.price
    // 商品原价
    this.oldPrice = itemInfo.oldPrice
    // 商品最低价
    this.realPrice = itemInfo.lowNowPrice
    // 折扣
    this.discount = itemInfo.discountDesc
    // 销量|收藏|快递
    this.columns = columns
    // 商品服务:"退货补运费"
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cFans = shopInfo.cFans
    this.cSells = shopInfo.cSells
    this.score = shopInfo.score
    this.cGoods = shopInfo.cGoods

  }
}

export class params {
  constructor(itemParams) {
    this.image = itemParams.info.images ? itemParams.info.images[0] : '';
    this.set = itemParams.info.set
    this.tables = itemParams.rule.tables
  }
}

export class comment {
  constructor(commentInfo) {
    this.content = commentInfo.content
    this.user = commentInfo.user
    this.images = commentInfo.images
    this.created = commentInfo.created
    this.style = commentInfo.style
  }
}
