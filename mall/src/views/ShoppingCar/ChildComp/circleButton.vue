<template>
  <div class="circle-button" >
    <div class="notactive" v-if="isShow">
    </div>
    <div class="isactive" v-else>
      <img :src="require('@/assets/img/icon/choose.svg')">
    </div>
  </div>

</template>

<script>
export default {
  name: "circleButton",
  props:{
    isShow:''
  }
}
</script>

<style scoped>
.circle-button {
  height: 100px;
  width: 40px;
}
.notactive {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: #9b9b9b 2px solid;
  margin-top: 40px;
  margin-left: 10px;
}
.isactive{
  margin-top: 40px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: red;
  margin-left: 10px;
}
img{
  height: 100%;
  width: 100%;
}
</style>