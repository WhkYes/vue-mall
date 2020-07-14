<!--  -->
<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 10px;
  border-bottom: 5px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 90%;
  margin-bottom: 10px;
  margin-top: 5px;
}
</style>