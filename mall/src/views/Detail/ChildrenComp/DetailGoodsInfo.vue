<template>
  <div class="detail-goods-info">
    <div class="goods-describe">
      <span>{{detailGoodsInfo.desc}}</span>
    </div>
    <div class="goods-img" v-for="item in detailGoodsInfo.detailImage">
        <div class="describe">
          <span>{{item.key}}</span>
        </div>
      <div  v-for="imgItem in item.list">
        <img :src="imgItem">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailGoodsInfo: []
  }
}
</script>

<style scoped>
.detail-goods-info{
  margin-top: 20px;
}
.goods-describe{
  font-family: "Arial Black";
  font-size: 20px;
}
.goods-img{

}
.describe{
  margin-top: 20px;
  font-size: 18px;
}
img{
  width: 100%;
}
</style>