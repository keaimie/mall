<template>
  <tab-bar>
    <tab-bar-item link="/home" activeColor="red">
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/index.png" alt="">
      </template>
      <template v-slot:item-icon-select>
        <img src="../../../assets/img/tabbar/select_index.png" alt="">
      </template>
      <template v-slot:item-text >
        <div>主页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/shop" activeColor="red">
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/shop.png" alt="">
      </template>
      <template v-slot:item-icon-select>
        <img src="../../../assets/img/tabbar/select_shop.png" alt="">
      </template>
      <template v-slot:item-text >
        <div>主页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/cart" activeColor="red">
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/car.png" height="200" width="200"/></template>
      <template v-slot:item-icon-select>
        <img src="../../../assets/img/tabbar/select_car.png" alt="">
      </template>
      <template v-slot:item-text >
        <div>主页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/profile" activeColor="red">
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/user.png" alt="">
      </template>
      <template v-slot:item-icon-select>
        <img src="../../../assets/img/tabbar/select_user.png" alt="">
      </template>
      <template v-slot:item-text >
        <div>主页</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from "@/components/common/tabBar/tabBar";
import tabBarItem from "@/components/common/tabBar/tabBarItem";
export default {
  name: "MainTabBar",
  components:{
    tabBar,
    tabBarItem
  }
}
</script>

<style scoped>

</style>
