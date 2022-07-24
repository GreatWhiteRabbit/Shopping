<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-bar/>
  </div>
</template>
<script>


import MainBar from "@/components/content/MainBar/MainBar";
export default {
  name: 'App',
  components: {
    MainBar
  }
}
</script>

<style>

</style>
