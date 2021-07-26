<template>
  <div class="cart">
    <cart-nav-bar />
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>

<script>
import cartNavBar from "@/views/cart/childComps/cartNavBar";
import cartList from "@/views/cart/childComps/cartList";
import cartBottomBar from "@/views/cart/childComps/cartBottomBar";
export default {
  name: "cart",
  components:{
    cartNavBar,
    cartList,
    cartBottomBar
  }
}
</script>

<style scoped>
.cart {
  background-color: #F2F2F2;
}
</style>
