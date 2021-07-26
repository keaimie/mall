<template>
  <div class="detailTabBar">
    <div class="tabBarLeft">
      <div>
        <img src="~@/assets/img/detail/service.png" alt=""/>
        <span>客服</span>
      </div>
      <div>
        <img src="~@/assets/img/detail/shop.png" alt=""/>
        <span>店铺</span>
      </div>
      <div>
        <img src="~@/assets/img/detail/select.png" alt=""/>
        <span>收藏</span>
      </div>
    </div>
    <div class="tabBarRight">
      <div class="cart" @click="addCart">
        加入购物车
      </div>
      <div class="pay">
        购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailTabBar",
  methods:{
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
 .detailTabBar {
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   height: 49px;
   display: flex;
   z-index: 9;
   background-color: white;
 }
 .tabBarLeft,.tabBarRight{
   flex: 1;
   display: flex;
 }
 .tabBarLeft>div{
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
 }
 .tabBarLeft img {
   width: 22px;
   height: 22px;
 }
 .tabBarRight>div{
   flex: 1;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .cart {
   background-color: #ffe817;
   color: #333;
 }
 .pay {
   background-color: #ff6699;
   color: white;
 }
</style>
