<template>
<div class="recommend">
  <div class="recommend-item" v-for="item in recommends">
    <a :href="item.link">
      <img :src="item.image">
      <span>{{item.title}}</span>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "Recommend",
  props:{
    recommends:[]
  }
}
</script>

<style scoped>
.recommend{
  padding: 10px 0 20px 0px;
  text-align: center;
  height: 100px;
  display: flex;
  border-bottom: 8px solid #eeeeee;
}
.recommend-item{
  display: flex;
  text-align: center;
  flex: 1;
}
.recommend-item img{
  height: 90%;
  width: 90%;
}
.recommend-item a{
  text-decoration: none;
  color: black;
}
</style>