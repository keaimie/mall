<template>
  <div class="checkBox">
    <img src="~@/assets/img/cart/tick.svg" :class="{select:isCheck}" alt="">
  </div>
</template>

<script>
export default {
  name: "checkBox",
  props:{
    isCheck:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
 .checkBox{
   width: 22px !important;
   height: 22px !important;
   border-radius: 50%;
 }
 .checkBox img{
   width: 100%;
   height: 100%;
   border: 2px #aaa solid;
   border-radius: 50%;
 }
 .select {
   border: 1px red solid !important;
   background-color: red;
 }
</style>
