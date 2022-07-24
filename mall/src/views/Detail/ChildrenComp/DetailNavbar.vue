<template>
  <nav-bar class="nav-top">
    <template v-slot:left>
      <div>
        <img :src="require('@/assets/img/icon/arrow.svg')" class="img" @click="backHome">
      </div>
    </template>
      <template v-slot:center >
        <div class="titles">
        <div v-for="(item,index) in titles" class="item" :class="{active:currentIndex===index}"
             @click="itemClick(index)">{{item}}</div>
        </div>
      </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailNavbar",
  components: {NavBar},
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index;
      this.$emit('navbarClick',index);
    },
    backHome(){
      this.$router.back();
    }
  }
}
</script>

<style scoped>

.nav-top{
  background-color: white;
  z-index: 9;
}
.titles{
  display: flex;
}
.item{
  flex: 1;
}
.active{
  background-color: white;
  color: red;
}
.img{
  height: 50%;
  width: 50%;
  margin-top: 10%;
}
</style>