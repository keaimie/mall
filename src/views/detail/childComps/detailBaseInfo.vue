<template>
  <div class="baseInfo" v-if="Object.keys(goods).length">
    <div class="infoTitle">{{ goods.title }}</div>
    <div class="infoPrice">
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span class="discount" v-show="goods.discount !=''">{{ goods.discount }}</span>
    </div>
    <div class="infoOther">
      <div v-for="item in goods.columns">
      {{item}}
      </div>
     </div>
    <div :class="[!isMore ? 'info-service-active':'info-service']">
      <div v-for="item in goods.services" class="serviceItem" :class="{serviceItemActive:isMore}">
        <img :src="item.icon" alt="">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    isMore(){
      return this.goods.services.length > 4
    }
  }
}
</script>

<style scoped>
 .baseInfo{
   width:96%;
   margin: 0 auto;
   padding-top:15px;
   padding-bottom: 20px;
   border-bottom: 3px solid rgba(100,100,100,.1);
 }
 .infoTitle{
    color: #222;
    font-size: 20px;
 }
 .infoPrice{
   margin-top: 15px;
 }
 .infoPrice .newPrice {
   color: var(--color-high-text);
   font-size: 24px;
 }
 .infoPrice .oldPrice{
   margin-left: 5px;
   margin-right: 5px;
   color: var(--color-text);
   font-size: 15px;
   text-decoration:line-through;
 }
 .infoPrice .discount {
   font-size: 15px;
   color: #ffffff;
   background-color: #f13e3a;
   padding: 2px 5px;
   border-radius: 8px;
 }
 .infoOther{
   margin-top: 20px;
   display: flex;
   justify-content: space-between;
   padding-bottom: 10px;
   border-bottom: 1px solid rgba(100,100,100,.1);
 }
 .info-service-active{
   padding-top: 12px;
   display: flex;
   justify-content: space-between;
 }
 .info-service{
   padding-top: 12px;
   display: flex;
   flex-wrap: wrap;
 }
 .serviceItemActive{
   margin-right: 20px;
 }
 .serviceItem{
   display: flex;
   align-items: center;
   font-size: 13px;
   margin-top: 8px;
 }
 .serviceItem img{
   width: 13px;
   height: 13px;
   margin-right: 2px;
 }
</style>
