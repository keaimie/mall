<template>
  <nav-bar>
    <template v-slot:center>
      <div>蘑菇街</div>
    </template>
  </nav-bar>
</template>

<script>
import navBar from "@/components/common/navBar/navBar";
export default {
  name: "HomeNavBar",
  components:{
    navBar
  }
}
</script>

<style scoped>

</style>
