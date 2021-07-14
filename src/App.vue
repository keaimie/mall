<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
import mainTabBar from "@/components/content/mainTabBar/mainTabBar";
export default {
  name: 'App',
  components:{
    mainTabBar
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
