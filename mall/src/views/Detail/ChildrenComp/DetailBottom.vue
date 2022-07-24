<template>
<div class="detail-bottom">
    <tab-bar class="bar">
      <template v-slot:icon >
        <img src="@/assets/img/Detail/detail/shop.svg" >
      </template>
      <template v-slot:icon-active>
        <img src="@/assets/img/Detail/detail-active/shop-active.svg" >
      </template>
      <template v-slot:item>
        <i>店铺</i>
      </template>
    </tab-bar>
  <tab-bar class="bar">
    <template v-slot:icon >
      <img src="@/assets/img/Detail/detail/server.svg" >
    </template>
    <template v-slot:icon-active>
      <img src="@/assets/img/Detail/detail-active/serve-active.svg" >
    </template>
    <template v-slot:item>
      <i>客服</i>
    </template>
  </tab-bar>
  <tab-bar class="bar" >
    <template v-slot:icon >
      <img src="@/assets/img/Detail/detail/car.svg" >
    </template>
    <template v-slot:icon-active>
      <img src="@/assets/img/Detail/detail-active/car-active.svg" >
    </template>
    <template v-slot:item>
      <i>购物车</i>
    </template>
  </tab-bar>
  <div class="add-car" @click="addCar">
    <span>加入购物车</span>
  </div>
  <div class="purchase">
  <span>立即购买</span>
  </div>
</div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
export default {
  name: "DetailBottom",
  components: {TabBar},
  methods:{
    addCar(){
     this.$emit('addCar');
    }
  }
}
</script>

<style scoped>
.detail-bottom{
  height: 50px;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
 background-color: white;
}
.add-car{
  width: 25%;
  background-color: rgb(255, 161, 51);
  margin-left: 1%;
  border-radius: 25%;
  line-height: 50px;
  text-align: center;
  color: white;
}
.purchase{
  width: 25%;
  background-color: red;
  margin-left: 1%;
  border-radius: 25%;
 line-height: 50px;
  text-align: center;
  color: white;
}
.bar{
  margin-left: 0;
}
</style>