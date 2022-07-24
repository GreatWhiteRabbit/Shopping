<template>
<div class="back-top"@click="backTop">
  <img :src="require('@/assets/img/icon-active/backTop.svg')">
</div>
</template>

<script>
export default {
  name: "backTop",
  methods:{
    backTop(){
     window.scrollTo(0,0);
    }

  }
}
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 15px;
  bottom: 60px;
}
.back-top img{
  width: 50px;
  height: 50px;
}
</style>