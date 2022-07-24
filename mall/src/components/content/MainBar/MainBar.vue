<template>
<div class="bar">
    <tab-bar path="/home">
      <template v-slot:icon >
        <img src="@/assets/img/icon/shouye.svg" alt="首页">
      </template>
      <template v-slot:icon-active>
        <img src="@/assets/img/icon-active/shouye.svg" alt="首页">
      </template>
      <template v-slot:item>
        <i>首页</i>
      </template>
    </tab-bar>


    <tab-bar path="/classify">
      <template v-slot:icon >
        <img src="@/assets/img/icon/fenlei.svg" alt="分类">
      </template>
      <template v-slot:icon-active >
        <img src="@/assets/img/icon-active/fenlei.svg" alt="分类">
      </template>
      <template v-slot:item>
        <i>分类</i>
      </template>
    </tab-bar>


  <tab-bar path="/shoppingCar">
    <template v-slot:icon >
      <img src="@/assets/img/icon/gouwuche.svg" alt="购物车">
    </template>
    <template v-slot:icon-active >
      <img src="@/assets/img/icon-active/gouwuche.svg" alt="购物车">
    </template>
    <template v-slot:item>
      <i>购物车</i>
    </template>
  </tab-bar>


  <tab-bar path="/profile">
    <template v-slot:icon >
      <img src="@/assets/img/icon/wode.svg" alt="我的">
    </template>
    <template v-slot:icon-active >
      <img src="@/assets/img/icon-active/wode.svg" alt="我的">
    </template>
    <template v-slot:item>
      <i>我的</i>
    </template>
  </tab-bar>


</div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
export default {
  name: "MainBar",
  components: {TabBar},

}
</script>

<style scoped>

.bar{
  z-index: 0;
  background-color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  right: 0;
  left: 0;
  box-shadow: 10px 10px 1px 10px rgb(200,200,200);

}

</style>