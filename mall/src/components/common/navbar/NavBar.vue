<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  position: fixed;
  height: 44px;
  display: flex;
  text-align: center;

}

.left, .right {
  height: 44px;
  width: 60px;
  line-height: 44px;
}

.center {
  height: 44px;
  line-height: 44px;
  flex: 1;
}
</style>