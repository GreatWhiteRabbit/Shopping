<template>
<div>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in  topimage">
     <img :src="item" alt="">
    </swiper-item>
  </swiper>
</div>
</template>

<script>
import Swiper from "@/components/common/swiper/swiper";
import SwiperItem from "@/components/common/swiper/swiperItem";
export default {
  name: "DetailSwiper",
  components: {SwiperItem, Swiper},
  props:{
    topimage:[]
  }
}
</script>

<style scoped>
.detail-swiper{
  top: 44px;
  height: 300px;
  overflow: hidden;
}
</style>