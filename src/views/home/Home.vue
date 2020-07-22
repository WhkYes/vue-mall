<!--  -->
<template>
  <div id="home">
    <navbar class="home-nav-bar"></navbar>
    <tab-control
      class="tab-control"
      :titles="['流行','新款','精选']"
      @tabcontrol="tabcontrol"
      v-show="istabshow"
      ref="tabc1"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      @scrollpositon="scrollpositon"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadmore"
    >
      <carousel :carouselList="carouselList" @loadcarousel="loadcarousel"></carousel>
      <recommend :recommends="recommends"></recommend>
      <fearture></fearture>
      <tab-control
        class="tab-control"
        :titles="['流行','新款','精选']"
        @tabcontrol="tabcontrol"
        ref="tabc2"
      ></tab-control>
      <goods :goods="showGoods"></goods>
    </scroll>
    <back-top @click.native="backClick" v-show="isshowbacktop"></back-top>
  </div>
</template>

<script>
import Carousel from "./childComponents/Carousel";
import Recommend from "./childComponents/Recommends";
import Fearture from "./childComponents/Feature";

import Navbar from "components/common/navbar/Navbar";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backTop/BackTop";

import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/debounce";

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
      currentType: "pop",
      isshowbacktop: false,
      tabOffsetTop: 0,
      istabshow: false
    };
  },
  components: {
    Carousel,
    Recommend,
    Fearture,
    Navbar,
    TabControl,
    Goods,
    Scroll,
    BackTop
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("new");
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 监听图片加载完成
    // this.$bus.$on("imageIsLoad", () => {
    //   // console.log(123);
    //   this.$refs.scroll && this.$refs.scroll.refresh();
    // });
    const refreshTime = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("imageIsLoad", () => {
      refreshTime();
    });

    // 获取tabcontrol的offsetTop
    // console.log(this.$refs.tabc.$el.offsetTop);
    // setTimeout(() => {
    //   console.log(this.$refs.tabc.$el.offsetTop);
    // }, 3000);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /* 事件监听方法 */
    // 防抖函数

    // tab监听事件
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
      this.$refs.tabc1.currentIndex = index;
      this.$refs.tabc2.currentIndex = index;
    },
    // 返回顶部事件
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 监听backtop组件 事件
    scrollpositon(position) {
      // console.log(position.y);
      this.isshowbacktop = position.y < -1000;
      this.istabshow = -position.y > this.tabOffsetTop;
      // console.log(this.istabshow);
    },
    // 监听加载事件
    loadmore() {
      this.getHomeGoods(this.currentType);
      // 标识一次上拉加载动作结束，等待触发下一次事件
      this.$refs.scroll.finishPullUp();
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
        // console.log(this.goods);
      });
    },
    loadcarousel() {
      // console.log(this.tabOffsetTop);
      this.tabOffsetTop = this.$refs.tabc2.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */

#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
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
  /* top: 44px; */
  position: relative;
  z-index: 9;
}
.content {
  /* height: 300px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>