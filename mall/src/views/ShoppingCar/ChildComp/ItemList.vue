<template>
  <div class="car-list">
  <div class="shop-car-item" v-for="(item,index) in carList">
      <circle-button :is-show="item.checked" @click.native="changeCheck(index)"/>
      <div>
        <img :src="item.image">
      </div>
      <div class="goods-desc">
        <span class="title">{{item.tilte}}</span>
        <span class="desc">{{item.desc}}</span>
        <div class="price-counter">
          <span class="price">{{'￥'+item.price}}</span>
          <span>{{'X'+ item.counter}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleButton from "@/views/ShoppingCar/ChildComp/circleButton";
export default {
  name: "ItemList",
  components: {CircleButton},
  data(){
    return{
      carList:[]
    }
  },
  created() {
    this.carList=this.$store.state.carList;
  },
  methods:{
    changeCheck(index){
      this.$store.state.carList[index].checked=! this.$store.state.carList[index].checked;
      if( this.$store.state.carList[index].checked===true)
      {
        this.$store.state.carLength=this.$store.state.carLength-1;
        this.$store.state.totalPrice-=this.$store.state.carList[index].counter*this.$store.state.carList[index].price;
      }
      else
      {
        this.$store.state.carLength=this.$store.state.carLength+1;
        this.$store.state.totalPrice+=this.$store.state.carList[index].counter*this.$store.state.carList[index].price;
      }
      if(this.$store.state.carLength===this.$store.state.carList.length)
      {
        this.$store.state.checkAll=false;
        this.$store.state.totalPrice=this.$store.state.price;
      }
      else{
        this.$store.state.checkAll=true;
      }
    }
  }
}
</script>

<style scoped>
.car-list{
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}
.shop-car-item{
  display: flex;
  margin-bottom: 5px;
  box-shadow: 1px 1px 1px 1px #9b9b9b;
}
.shop-car-item img{
  height: 100px;
  border-radius: 5%;
}
.goods-desc{
  width: 70%;
  display: flex;
  flex-direction: column;
  line-height: 30px;
}
.price-counter{
  display: flex;
  justify-content: space-between;
}
.title{
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.price{
  color: crimson;
  font-size: 18px;
}
.desc{
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #9b9b9b;
}
</style>