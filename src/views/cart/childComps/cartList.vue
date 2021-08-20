<template>
  <div class="cartList">
    <scroll class="scroll">
      <cart-list-item v-for="(item,index) in list" :product="item" :key="index"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import cartListItem from "@/views/cart/childComps/cartListItem";

import { mapGetters } from 'vuex'
export default {
  name: "cartList",
  components:{
    cartListItem,
    Scroll
  },
  computed:{
    ...mapGetters({
      list:'cartList'
    })
  }
}
</script>

<style scoped>

 .scroll {
   height: calc(100vh - 93px - 49px - 49px);
   overflow: hidden;
}
</style>
