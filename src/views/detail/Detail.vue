<!--  -->
<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <carousel :carouselList="carouselList"></carousel>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import Carousel from "./childComponents/Carousel";
import { getDetail } from "network/detail.js";

export default {
  name: "Detail",
  components: { DetailNavBar, Carousel },
  data() {
    return {
      iid: null,
      carouselList: null
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    console.log(123);
    // 获取商品id
    this.iid = this.$route.params.iid;
    // 轮播图：将商品轮播图数据传给carouselList
    getDetail(this.iid).then(res => {
      this.carouselList = res.result.itemInfo.topImages;
    });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>