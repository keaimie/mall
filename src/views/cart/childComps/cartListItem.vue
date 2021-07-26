<template>
  <div class="cartListItem">
    <div class="checkBox">
      <check-box  :is-check="product.check" @click.native="changeCheck" />
    </div>
    <div class="image">
      <img :src="product.imgUrl" alt=""></div>
    <div class="info">
      <div class="title">{{product.title}}</div>
      <div class="desc">{{product.desc}}</div>
      <div class="other">
        <div class="price">￥{{product.price}}</div>
        <div class="count">×{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import checkBox from "@/components/common/checkBox/checkBox";
export default {
  name: "cartListItem",
  components:{
    checkBox
  },
  props:{
    product:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    changeCheck() {
      this.$store.commit('changeState',this.product)
    }
  }
}
</script>

<style scoped>
 .cartListItem {
   padding: 5px 5px 5px 0;
   display: flex;
   background-color: white;
   border-radius: 10px;
   margin-bottom: 6px;
 }
 .checkBox {
   width: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .image img {
   width: 80px;
   height: 100px;
   border-radius: 5px;
 }
 .info {
   flex: 1;
   width: 0;
   padding: 8px 12px 0;
   font-size: 17px;
   color: #333;
 }
 .title,.desc{
   white-space: nowrap;
   text-overflow:ellipsis;
   overflow: hidden;
 }
 .title {
   font-size: 17px;
 }
 .desc {
   padding: 12px 0 20px 3px;
   font-size: 14px;
   color: #666;
 }
 .other {
   display: flex;
   justify-content: space-between;
   color: orangered;
   padding-right: 5px;
 }
</style>
