<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabBar"
}
</script>

<style scoped>
  #tabBar {
    position: fixed;
    bottom:0;
    left: 0;
    right: 0;
    display: flex;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
    z-index: 9;
  }
</style>
