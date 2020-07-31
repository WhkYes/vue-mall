<!--  -->
<template>
  <div class="goods">
    <GoodsItem v-for="(item,index) in goods" :key="index" :goodsItem="item"></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";

export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsItem,
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // console.log(this.goods);
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.goods {
  display: flex;
  flex-wrap: wrap;

  /* 将每一行的图片均等分 */
  justify-content: space-around;
}
</style>