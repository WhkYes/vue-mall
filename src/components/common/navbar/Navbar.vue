<!--  -->
<template>
  <div class="nav-bar">
    <div class="left-nav-bar">
      <slot name="left-nav-bar"></slot>
    </div>
    <div class="center-nav-bar">
      <slot name="center-nav-bar">
        <h2>购物街</h2>
      </slot>
    </div>
    <div class="right-nav-bar">
      <slot name="right-nav-bar"></slot>
    </div>
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
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  /* 阴影 */
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left-nav-bar,
.right-nav-bar {
  width: 60px;
}
.center-nav-bar {
  flex: 1;
}
</style>