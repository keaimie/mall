<template>

</template>

<script>
import goodsList from "@/components/content/goods/goodsList";
export default {
  name: "detailRecommend",
  components:{
    goodsList
  },
  props:{
    goods:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
