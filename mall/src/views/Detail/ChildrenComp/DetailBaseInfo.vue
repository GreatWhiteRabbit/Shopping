<template>
  <div class="info">
    <div class="info-title">
      <span>{{ goods.title }}</span>
    </div>
    <div class="info-price">
      <span class="info-newPrice">{{ goods.newPrice }}</span>
      <span class="info-oldPrice">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="info-discount">{{ goods.discount }}</span>
    </div>
    <div class="info-star">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
    <span v-for="index in goods.services.length-1" class="info-service-item">
      <img :src="goods.services[index-1].icon" class="info-image">
      <span>{{ goods.services[index - 1].name }}</span>
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: []
  }
}
</script>

<style scoped>
.info {
  margin-top: 50px;
}

.info-title {
  font-size: 18px;
}

.info-price {
  margin-top: 5px;
}

.info-newPrice {
  font-size: 20px;
  color: rgb(225, 37, 27);
}

.info-oldPrice {
  font-size: 14px;
  text-decoration: line-through;
  color: #9b9b9b;
}
.info-discount{
  background-color: rgba(241, 16, 188, 0.96);
  color: white;
  border-radius: 5px;
  padding: 4px;
}

.info-star {
  margin-top: 10px;
  display: flex;
  color: #9b9b9b;
  justify-content: space-around;
  padding-bottom: 10px;
  box-shadow: 1px 1px 0px 0px #c2c0c0;
}

.info-service {
  margin-top: 20px;
  font-size: 15px;
  padding-bottom: 20px;
  box-shadow: 1px 3px 0px 0px #d2d0d0;
  display: flex;
  flex-wrap: wrap;

}
img{
  width: 25px;
  height: 25px;
}
.info-service-item{
 margin-right: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>