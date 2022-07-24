<template>
  <div>
    <div class="goods-rule-item" v-for="item in goodsParams.rule.tables[0]">
      <span v-for="ruleItem in item">{{ ruleItem }}</span>
    </div>
    <div class="disclaimer">
      <span>{{ goodsParams.rule.disclaimer }}</span>
    </div>

    <div v-for="item in goodsParams.info.set" class="goods-info">
      <span class="item-key">{{ item.key }}</span>
      <span class="item-value">{{ item.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParams",
  props: {
    goodsParams: []
  }
}
</script>

<style scoped>

.goods-rule-item {
  display: flex;
  justify-content: space-around;
  box-shadow: 1px 0px 0px 0.5px #c2c0c0;
  height: 40px;
  line-height: 40px;
  color: #9b9b9b;
}

.disclaimer {
  margin-top: 10px;
  color: hotpink;
}

.goods-info {
  display: flex;
  margin-top: 20px;
  box-shadow: 1px 0px 1px 0.5px #eae7e7;
}

.item-key {

}

.item-value {
  color: coral;
  margin-left: 20%;

}
</style>