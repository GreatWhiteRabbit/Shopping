<template>
  <div class="home">
    <nav-bar class="form">
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" style="margin-top: 40px">
        </a>
      </swiper-item>
    </swiper>
    <recommend :recommends="recommends"></recommend>
    <tab-control :title="title" class="tab-control"
                 @tabClick="tabClick"
                 >
    </tab-control>
    <goods-list :goods="goods[classify].list"></goods-list>
    <back-top v-show="isShowTopBack"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeData, getHomeMulitdata} from "@/network/home";
import Swiper from "@/components/common/swiper/swiper";
import SwiperItem from "@/components/common/swiper/swiperItem";
import Recommend from "@/views/Home/Recommend";
import TabControl from "@/components/content/TabControl/TabControl";
import BackTop from "@/components/common/backTop/backTop";
import GoodsList from "@/views/Home/ChilderComp/goodsList";

export default {
  name: "Home",
  components: {GoodsList, BackTop, TabControl, Recommend, SwiperItem, Swiper, NavBar},
  data() {
    return {
      banners: [],
      recommends: [],
      title: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      classify: 'pop',
      isShowTopBack:false,
      scrollY:0
    }
  },
  created() {
    this.getHomeMulitdata();
    this.getHomeData('pop');
    this.getHomeData('new');
    this.getHomeData('sell');
  },
  methods: {
    tabClick(index) {
      if (index === 0)
        this.classify = 'pop'
      else if (index === 1)
        this.classify = 'new'
      else this.classify = 'sell'
    },
    getHomeMulitdata() {
      getHomeMulitdata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then(res => {

        this.goods[type].list.push(...res.data.data.list) ;
        this.goods[type].page +=1;
      })
    }
  },
  mounted() {
   const that=this;

    addEventListener('scroll',function (){
      that.isShowTopBack=document.body.scrollTop+document.documentElement.scrollTop > 1000;

      let clientHeight=document.documentElement.clientHeight;

      let scrollHeight=document.body.scrollHeight;

      let scrollTop=document.documentElement.scrollTop;

      let distance=100;

      if((scrollTop+clientHeight) >=(scrollHeight-distance))
      {
        that.getHomeData(that.classify);

      }
    });

  },
  activated() {
    window.scrollTo(0,this.scrollY);
  },
  deactivated() {
    var that=this;
    addEventListener('scroll',function (){
      if(document.body.scrollTop+document.documentElement.scrollTop !== 0)
      {
        that.scrollY=document.body.scrollTop+document.documentElement.scrollTop ;
      }

    })

  }
}
</script>

<style scoped>
.home {

}

.form {
  background-color: #ff0000;
  color: #ffffff;
  z-index: 40;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

</style>