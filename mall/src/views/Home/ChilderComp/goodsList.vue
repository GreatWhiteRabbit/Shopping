<template>
  <div class="goods-list">
    <div v-for="item in goods" class="goods-list-item" @click="goDetail(item.iid)">
<!--      <img :src="item.show.img">-->
      <img v-lazy="item.show.img">
      <div class="goods-info">
        <p class="goods-info-title">{{ item.title }}</p>
        <div>
          <span class="price">{{ "￥" + item.price }}</span>
          <span>{{ item.cfav + "收藏" }}</span>
        </div>

      </div>
    </div>
    <!--      将最下面的商品内容显示出来-->
    <div style="height: 50px;width: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "goodsList",
  props:{
    goods:[]
  },
  methods:{
    goDetail(id){

        this.$router.push({
          path:'/detail',
          query:{
            id:id
          }
        })


    }
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.goods-list-item {
  margin-left: 2%;
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.goods-list-item img {
  width: 100%;
  margin-bottom: 0.25rem;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 0.45rem;
}

.goods-info {
  display: flex;
  flex-direction: column;
}

.goods-info-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.price {
  color: crimson;
  margin-right: 4%;
}
</style>