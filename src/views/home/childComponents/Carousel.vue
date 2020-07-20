<!--  -->
<template>
  <div class="block">
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
    <el-carousel height="200px">
      <el-carousel-item v-for="(item,index) in carouselList" :key="index">
        <!-- <h3 class="small">{{ item.image }}</h3> -->
        <a :href="item.link">
          <img v-bind:src="item.image" @load="loadCarousel" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home.js";
export default {
  props: {
    carouselList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isload: false
    };
  },
  methods: {
    loadCarousel() {
      if (!this.isload) {
        this.$emit("loadcarousel");
        this.isload = true;
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  height: 100%;
}
</style>