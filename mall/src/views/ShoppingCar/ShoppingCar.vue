<template>
  <div class="shop-car">
   <car-nav/>
    <item-list/>
    <pay></pay>
  </div>
</template>

<script>
import ItemList from "@/views/ShoppingCar/ChildComp/ItemList";
import NavBar from "@/components/common/navbar/NavBar";
import CarNav from "@/views/ShoppingCar/ChildComp/carNav";
import pay from "@/views/ShoppingCar/ChildComp/pay";
export default {
  name: "ShoppingCar",
  components: {CarNav, NavBar, ItemList,pay}
}
</script>

<style scoped>
.shop-car{
  display: flex;
  flex-direction: column;
  z-index: 9;
  margin-bottom: 52px;
}

</style>