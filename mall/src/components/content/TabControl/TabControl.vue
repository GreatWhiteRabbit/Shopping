<template>
<div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in title" @click="itemClick(index)">
      <span :class="{tabActive:index===currentIndex}">{{item}}</span>
    </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    title:[]
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index) {
      this.currentIndex=index;
      this.$emit("tabClick",index);
    }
  }
}
</script>

<style scoped>
.tab-control{
display: flex;
  text-align: center;
  background-color: white;
}
.tab-control-item{
  height: 44px;
  line-height: 44px;
  flex: 1;
}
.tabActive{
  color: rgba(246, 61, 103, 0.87);
  border-bottom: 3px solid rgba(246, 61, 103, 0.87);
}
</style>