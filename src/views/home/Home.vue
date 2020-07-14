<!--  -->
<template>
  <div id="home">
    <navbar class="home-nav-bar"></navbar>
    <carousel :carouselList="carouselList"></carousel>
    <recommend :recommends="recommends"></recommend>
    <fearture></fearture>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabcontrol="tabcontrol"></tab-control>
    <goods :goods="showGoods"></goods>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>
import Carousel from "./childComponents/Carousel";
import Recommend from "./childComponents/Recommends";
import Fearture from "./childComponents/Feature";

import Navbar from "components/common/navbar/Navbar";
import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  data() {
    return {
      carouselList: null,
      recommends: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  components: {
    Carousel,
    Recommend,
    Fearture,
    Navbar,
    TabControl,
    Goods
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("new");
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /* 事件监听方法 */
    tabcontrol(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /* 网络请求方法 */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.carouselList = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.recommends);z
        // console.log(this.banners.list[0].image);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        console.log(this.goods);
      });
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */

#home {
  padding-top: 44px;
}
.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>