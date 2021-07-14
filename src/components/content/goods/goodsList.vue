<template>
  <div class="goodsList">
    <goods-list-item v-for="item in goods" :goods-item="item" :key="item.iid"/>
  </div>
</template>

<script>
import goodsListItem from "@/components/content/goods/goodsListItem";
export default {
  name: "goodsList",
  props:{
    goods:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components:{
    goodsListItem
  }
}
</script>

<style scoped>
 .goodsList{
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   align-items: center;
 }
</style>
