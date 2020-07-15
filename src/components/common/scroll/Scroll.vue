<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bs: null
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // console.log(this.$refs.wrapper);
    // console.log(BScroll);
    this.bs = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 监听滚动时的位置
    this.bs.on("scroll", position => {
      this.$emit("scrollpositon", position);
    });
    // 监听上拉加载事件
    this.bs.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.bs.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.bs.finishPullUp();
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>