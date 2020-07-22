<!--  -->
<template>
  <div class="info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-title">{{goodsInfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goodsInfo.newPrice}}</span>
      <span class="o-price">{{goodsInfo.oldPrice}}</span>
      <span class="discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="info-sell-collect">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>

      <span>{{goodsInfo.columns[2]}}</span>
    </div>
    <div class="info-services">
      <span v-for="(item,index) in goodsInfo.services" :key="index">
        <img :src="item.icon" class="info-services-img" />
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    // console.log(this.goodsInfo);
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // console.log(this.goodsInfo);
    // console.log(Object.keys(this.goodsInfo).length);
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.info {
  /* height: 1000px; */
}
.info-title {
  font-family: cursive;
  font-size: 20px;
  font-weight: 800;
}
.info-price {
  padding: 10px 0 10px 0;
}
.n-price {
  color: pink;
  font-size: 25px;
  font-weight: 500;
}
.o-price {
  text-decoration: line-through;
  font-size: 15px;
}
.discount {
  background-color: red;
  color: #fff;
  border-radius: 3px;
  padding-bottom: 5px;
}
.info-sell-collect {
  display: flex;
  opacity: 0.5;
}
.info-sell-collect span {
  flex: 1;
  text-align: inherit;
}
.info-services {
  padding: 20px 0 20px 0;
  border-top: 1px solid #fde;
  border-bottom: 1px solid #fde;
}
.info-services span {
  margin: 2px;
}
.info-services-img {
  width: 3%;
  height: 3%;
}
</style>