<template>
   <div class="goodsItem" @click="itemClick(goodsItem.iid)">
<!--     v-lazy="getImage" :key="goodsItem.iid"-->
     <img :src="getImage" alt="" @load="itemImageLoad">
     <div class="goodsInfo">
       <p>{{goodsItem.title}}}</p>
       <span class="price">{{goodsItem.price}}</span>
       <span class="cfav">{{goodsItem.cfav}}</span>
     </div>
   </div>
</template>

<script>
export default {
  name: "goodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    itemImageLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(id) {
      this.$router.push('/detail/' + id)
    }
  },
  computed:{
    getImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style scoped>
  .goodsItem {
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }
  .goodsItem img {
    width: 100%;
    border-radius: 5px;
  }
  .goodsInfo {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goodsInfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .cfav {
    position: relative;
  }
  .cfav::before {
    content: '';
    position: absolute;
    left: -14px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
