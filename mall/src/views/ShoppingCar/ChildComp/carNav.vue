<template>
  <nav-bar class="bar">
    <template v-slot:center>
      <span>购物车</span>
    </template>
  </nav-bar>
</template>

<script>
import navBar from "@/components/common/navbar/NavBar";
export default {
  name: "carNav",
  components:{navBar}
}
</script>

<style scoped>
.bar{
  background-color: #ff0000;
  color: white;
}
</style>