<!--  -->
<template>
  <div class="detail-navbar">
    <Navbar>
      <div slot="left-nav-bar" class="title-back" @click="backClick">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center-nav-bar" class="title">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="title-item"
          :class="{active:index===currentindex}"
          @click="titleClick(index)"
        >
          <p>{{item}}</p>
        </div>
      </div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar.vue";

export default {
  components: { Navbar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentindex: 0,
    };
  },

  methods: {
    titleClick(index) {
      this.currentindex = index;
      this.$emit("indexNum", index);
    },
    backClick() {
      this.$router.go(-1);
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.title {
  display: flex;
  font-size: 15px;
}
.title-item {
  flex: 1;
}
.active {
  color: aqua;
}
.title-back {
  padding: 6px;
}
</style>