<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import mainTabBar from "@/components/content/mainTabBar/mainTabBar";
export default {
  name: 'App',
  components:{
    mainTabBar
  },
  created() {
  },
  computed:{
  }
}
</script>

<style>
bady {
  padding: 0;
  margin: 0;
}
@import "./assets/css/base.css";
</style>
