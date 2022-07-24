<template>
  <div class="detail">
    <detail-navbar @navbarClick="changePositon" ref="navbar"></detail-navbar>
    <detail-swiper :topimage="topImage"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detailGoodsInfo="detailGoodsInfo"></detail-goods-info>
    <detail-goods-params ref="params" :goodsParams="goodsParams"></detail-goods-params>
    <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
   <detail-recommend ref="recommend" :recommends="recommends"></detail-recommend>
<!--    为了不让最下面的组件遮挡其它部分-->
    <div style="margin-bottom: 50px"></div>
    <detail-bottom @addCar="addGoods"></detail-bottom>
    <back-top v-show="isShow"></back-top>
<!--显示要添加到购物车中的数量    -->
    <div class="addCar" v-show="showCar">
     <div class="num">
       <span>{{counter}}</span>
       <button @click="increase">+</button>
       <button @click="subtract">-</button>
     </div>
      <div class="change">
        <button class="make-sure" @click="makesure">确定</button>
        <button class="cancle" @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import DetailNavbar from "@/views/Detail/ChildrenComp/DetailNavbar";
import DetailSwiper from "@/views/Detail/ChildrenComp/DetailSwiper";
import {getDetail, getRecommend, Goods, Shop} from "@/network/detail";
import DetailBaseInfo from "@/views/Detail/ChildrenComp/DetailBaseInfo";
import DetailShopInfo from "@/views/Detail/ChildrenComp/DetailShopInfo";
import DetailBottom from "@/views/Detail/ChildrenComp/DetailBottom";
import DetailGoodsInfo from "@/views/Detail/ChildrenComp/DetailGoodsInfo";
import DetailGoodsParams from "@/views/Detail/ChildrenComp/DetailGoodsParams";
import DetailCommentInfo from "@/views/Detail/ChildrenComp/DetailCommentInfo";
import GoodsList from "@/views/Home/ChilderComp/goodsList";
import DetailRecommend from "@/views/Detail/ChildrenComp/DetailRecommend";
import BackTop from "@/components/common/backTop/backTop";

export default {
  name: "Detail",
  components: {
    BackTop,
    DetailRecommend,
    GoodsList,
    DetailCommentInfo,
    DetailGoodsParams,
    DetailGoodsInfo, DetailBottom, DetailShopInfo, DetailBaseInfo, DetailSwiper, DetailNavbar
  },
  data() {
    return {
      id: '',
      topImage: [],
      goods: [],
      shop: [],
      detailGoodsInfo: [],
      goodsParams: [],
      commentInfo: [],
      recommends:[],
      positionY:[],
      isShow:false,
      showCar:false,
      counter:1
    }
  },
  mounted() {
    this.getData();
  },
   /* created() {
     this.getData();
    },*/
  methods: {
    getData(){
      this.id=this.$route.query.id;
      this.getTopImage(this.id);
      this.getRecommend();
      setTimeout(this.getY,3000);
      setTimeout(this.showTitel,3000);
      setTimeout(this.backTop,3000);
    },
    getTopImage(id) {
      getDetail(id).then(res => {
        this.topImage = res.data.result.itemInfo.topImages;
        this.goods = new Goods(res.data.result.itemInfo, res.data.result.columns, res.data.result.shopInfo.services);
        this.shop = new Shop(res.data.result.shopInfo);
        this.detailGoodsInfo = res.data.result.detailInfo;
        this.goodsParams = res.data.result.itemParams;
        this.commentInfo = res.data.result.rate;
      })
    },
    getRecommend(){
    getRecommend().then(res => {
    this.recommends=res.data.data.list;
    })
    },
    changePositon(index){
      window.scrollTo(0,this.positionY[index]);
    },
    getY(){
      this.positionY=[]
      this.positionY.push(0);
      this.positionY.push(this.$refs.params.$el.offsetTop);
      this.positionY.push(this.$refs.comment.$el.offsetTop);
      this.positionY.push(this.$refs.recommend.$el.offsetTop);
    },
    showTitel(){
      const that=this;
      addEventListener('scroll',function (){
        if(document.documentElement.scrollTop>=0&&document.documentElement.scrollTop<that.positionY[1])
          that.$refs.navbar.currentIndex=0;
        else
        if(document.documentElement.scrollTop>=that.positionY[1]&&document.documentElement.scrollTop<that.positionY[2])
          that.$refs.navbar.currentIndex=1;
        else
        if(document.documentElement.scrollTop>=that.positionY[2]&&document.documentElement.scrollTop<that.positionY[3])
          that.$refs.navbar.currentIndex=2;
        else
          that.$refs.navbar.currentIndex=3;
      })
    },
    backTop(){
      const that=this;
      addEventListener('scroll',function (){
        that.isShow=document.documentElement.scrollTop>1000;
      })
    },
    addGoods(){
        this.showCar=true;
    },
    subtract(){
      if(this.counter!==1)
      this.counter--;
    },
    increase(){
      this.counter++;
    },
    makesure(){
      this.showCar=false;
      const product={};
      product.id=this.id;
      product.image=this.topImage[0];
      product.tilte=this.goods.title;
      product.price=this.goods.realPrice;
      product.desc=this.goods.desc;
      product.counter=this.counter;
      product.checked=false;
      this.$store.commit('addCar',product);
      alert('添加购物车成功');
    },
    cancel(){
      this.showCar=false;
    }
  }
}
</script>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 9;
  background-color: white;
}
.addCar{
  background-color: white;
  height:80px;
  position: fixed;
  bottom: 100px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.num{
  height: 40px;
  display: flex;
  width: 100px;
  background-color: white;
  justify-content: space-around;
  align-items: center;
}
.num button{
  border: none;
  width: 30px;
  height: 30px;
  font-size: 18px;
}
.change{
  height: 60px;
  display: flex;
  justify-content: space-around;
}
.make-sure{
  margin-right: 10px;
  background-color: #409eff;
  border: none;
  width: 80px;
  font-size: 18px;
  color: white;
  border-radius: 5px;
}
.cancle{
border: none;
  background-color: #f4f4f5;
  width: 80px;
  font-size: 18px;
  color: #94979d;
  border-radius: 5px;
}
</style>