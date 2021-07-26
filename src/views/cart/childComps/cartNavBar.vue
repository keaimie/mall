<template>
  <nav-bar class="center">
    <template v-slot:center>
      <div>购物车({{length}})</div>
    </template>
  </nav-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import navBar from "@/components/common/navBar/navBar";
export default {
  name: "cartNavBar",
  components:{
    navBar
  },
  computed:{
    // ...mapGetters(['cartLength'])
    ...mapGetters({
      length:'cartLength'
    })
  }
}
</script>

<style scoped>
 .center {
   background-color:var(--color-tint);
   color: white;
   font-weight: 500;
 }
</style>
