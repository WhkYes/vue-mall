<!--  -->
<template>
  <div class="detail">
    <detail-nav-bar class="navbar"></detail-nav-bar>
    <Scroll class="content" ref="scroll">
      <carousel :carouselList="carouselList"></carousel>
      <detail-base-info :goodsInfo="goodsInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>\
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import Carousel from "./childComponents/Carousel";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailParamInfo from "./childComponents/DetailParamInfo";
import DetailCommentInfo from "./childComponents/DetailCommentInfo";
import Scroll from "components/common/scroll/Scroll";
import { getDetail, GoodsInfo, Shop, params, comment } from "network/detail.js";
import { debounce } from "common/debounce.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    Carousel,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll
  },
  data() {
    return {
      iid: null,
      carouselList: null,
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {}
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    // 获取商品id
    this.iid = this.$route.params.iid;
    // 轮播图：将商品轮播图数据传给carouselList
    getDetail(this.iid).then(res => {
      this.carouselList = res.result.itemInfo.topImages;
      this.goodsInfo = new GoodsInfo(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shopInfo = new Shop(res.result.shopInfo);
      this.detailInfo = res.result.detailInfo;
      this.paramInfo = new params(res.result.itemParams);
      this.commentInfo = new comment(res.result.rate.list[0]);
      console.log(res);
      console.log(this.commentInfo);
    });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    const refreshTime = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("imageLoad", () => {
      refreshTime();
    });
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.detail {
  position: relative;
  z-index: 19;
  background-color: #fff;
  height: 100vh;
}
.navbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>