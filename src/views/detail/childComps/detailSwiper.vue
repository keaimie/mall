<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :stop-propagation="false">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img :src="item" alt="" @load="imageLoad">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';

export default {
  name: "swiper",
  props:{
    banners:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad:false
    }
  },
  components:{
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem
  },
  methods:{
    imageLoad() {
      if(!this.isLoad){
        this.$emit('imageLoad')
        this.isLoad=true
      }
    }
  }
}
</script>

<style scoped>
.my-swipe{
  height: 300px;
}
.my-swipe img{
  width:100%
}
</style>
