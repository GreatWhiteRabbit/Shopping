<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shop.shopLogo">
      <span class="shop-log-span">{{ shop.shopName }}</span>
    </div>
    <div class="shop-sell-info">
      <div class="shop-sell">
        <span style="font-size: 20px">{{ shop.sells }}</span>
        <span style="font-size: 15px">总销量</span>
      </div>
      <div class="shop-sell">
        <span style="font-size: 20px">{{ shop.goodsCount }}</span>
        <span style="font-size: 15px">全部宝贝</span>
      </div>
      <div class="shop-comment">
        <div class="shop-comment-item" v-for="item in shop.score">
          <span>{{ item.name }}</span>
          <span class="item-name-low" :class="{'item-name-high':item.isBetter}">{{ item.score }}</span>
          <span v-if="item.isBetter" class="item-score-high">高</span>
          <span v-else class="item-score-low">低</span>
        </div>
      </div>
    </div>
    <div class="shop-go">
        <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: []
  }
}
</script>

<style scoped>
.shop-info {
  margin-top: 20px;
}

.shop-logo {
  display: flex;
  line-height: 100px;
  font-size: 20px;
}

.shop-logo img {
  height: 100px;
  width: 100px;
}
.shop-log-span{
  color: #9b9b9b;
}

.shop-sell-info {
  display: flex;
  margin-top: 10px;
}

.shop-sell {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}

.shop-comment {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  width: 150px;
}

.shop-comment-item {
  display: flex;
  justify-content: space-between;
 margin-top: 5px;
}
.item-name-low{
  color: green;
}
.item-name-high{
  color: firebrick;
}
.item-score-low{
  background-color: green;
  color: white;
}
.item-score-high{
background-color: firebrick;
  color: white;
}
.shop-go{
  margin-top: 20px;
  margin-left: 30%;
  margin-right: 30%;
  background-color: #9b9b9b;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  color: white;
  border-radius: 20px;
}
</style>