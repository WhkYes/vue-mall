<!--  -->
<template>
  <div class="goods-item" @click="toDetail">
    <img :src="showImage" @load="imageload" />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  data() {
    return {};
  },
  methods: {
    imageload() {
      if (this.$route.path.indexOf("/home") == 0) {
        this.$bus.$emit("imageIsLoad");
      } else if (this.$route.path.indexOf("/detail") == 0) {
        this.$bus.$emit("detailImageLoad");
      }
    },
    toDetail() {
      this.$router.push("/detail/" + this.goodsItem.iid);
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
/* 子绝父相：子元素的绝对定位会参照最近的开启了相对定位的祖先元素 */
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 45%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 3px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: aqua;
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>