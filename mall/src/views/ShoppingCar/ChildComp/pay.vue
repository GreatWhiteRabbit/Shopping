<template>
<div class="pay">
  <div class="checkedAll">
    <div class="circle-button" @click="change">
      <div class="notactive" v-if="$store.state.checkAll">
      </div>
      <div class="isactive" v-else>
        <img :src="require('@/assets/img/icon/choose.svg')">
      </div>
    </div>
    <span>全选</span>
  </div>
  <div class="total">
    <span>应付</span>
    <span style="color:#f30d0d;font-size: 18px">{{'￥'+$store.state.totalPrice}}</span>
  </div>
  <div class="payback">
      <span>去结算</span>
      <span>{{'('+$store.state.carLength+')'}}</span>
  </div>
</div>
</template>

<script>
import CircleButton from "@/views/ShoppingCar/ChildComp/circleButton";
export default {
  name: "pay",
  components: {CircleButton},
  methods:{
    change(){
      this.$store.state.checkAll=!this.$store.state.checkAll;
      if(this.$store.state.checkAll===false)
      {
        this.$store.state.carLength=this.$store.state.carList.length;
        for(let i =0;i<this.$store.state.carList.length;i++){
          this.$store.state.carList[i].checked=false;
        }
        this.$store.state.totalPrice=this.$store.state.price;
      }
      else if(this.$store.state.checkAll===true)
      {
        this.$store.state.carLength=0;
        for(let i =0;i<this.$store.state.carList.length;i++){
          this.$store.state.carList[i].checked=true;
        }
        this.$store.state.totalPrice=0;
      }
    }
  }
}
</script>

<style scoped>
.pay{
  background-color: #ffeeee;
  height: 40px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 52px;
  display: flex;
  line-height: 40px;
}
.checkedAll{
  width: 80px;
  display: flex;
}
.total{

}
.payback{
  margin-left: 40px;
  width: 100px;
  border-radius: 40px;
  background-color: red;
  color: #ffffff;
  text-align: center;
}

.circle-button {
  height: 40px;
  width: 40px;
}
.notactive {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: #9b9b9b 2px solid;
  margin-left: 10px;
  margin-top: 10px;
}
.isactive{
  margin-left: 10px;
  margin-top: 10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: red;
  line-height: 20px;
}
img{
  height: 100%;
  width: 100%;
}
</style>