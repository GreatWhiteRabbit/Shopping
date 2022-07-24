<template>
<div class="comment">
  <div class="comment-top">
    <span>用户评价</span>
    <span>更多</span>
  </div>
  <div class="user-comment" v-if="commentInfo.cRate!==0">
<!--用户基本信息    -->
    <div class="user">
      <img :src="commentInfo.list[0].user.avatar">
      <span>{{commentInfo.list[0].user.uname}}</span>
    </div>
<!--用户评价    -->
    <div class="comment">
      <div class="detail-comment">
        <span>{{commentInfo.list[0].content}}</span>
      </div>
      <div class="goodsStyle">
        <span>评论时间：</span>
        <span>{{commentInfo.list[0].created | showDate}}</span>
        <span>{{commentInfo.list[0].style}}</span>
      </div>
      <div class="info-img">
        <img :src="item" v-for="item in commentInfo.list[0].images">
      </div>
    </div>
  </div>
  <div v-else>
    <span>暂无评价</span>
  </div>
</div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  props:{
    commentInfo:[]
  },
  filters:{
    showDate(date){
     var value=new Date(date*1000);
     var Y,M,D;
      Y = value.getFullYear() + '-';
      M = (value.getMonth()+1 < 10 ? '0'+(value.getMonth()+1) : value.getMonth()+1) + '-';
      D = value.getDate() + ' ';
      return Y+M+D;
    }
  }
}
</script>

<style scoped>
.comment{
  margin-top: 20px;
  margin-bottom: 10px;
}
.comment-top{
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 10px;
}
.user-comment{

}
.user{
  height: 50px;
  display: flex;
  line-height: 50px;
}
.user img{
  height: 50px;
}
.user span{
  margin-left: 10px;
  color: #424242;
}
.comment{

}
.detail-comment{
  display: flex;
  flex-direction: column;
}
.goodsStyle{
  display: flex;
  justify-content: space-around;
  color: #676666;
}
.info-img img{
  height: 60px;
}
</style>