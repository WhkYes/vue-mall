<!--  -->
<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt />
  </div>
</template>

<script>
export default {
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
.back-top {
  position: fixed;
  right: 0px;
  bottom: 50px;
}
.back-top img {
  width: 44px;
  height: 44px;
}
</style>