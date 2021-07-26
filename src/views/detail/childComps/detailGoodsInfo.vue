<template>
  <div class="goodsInfo" v-if="Object.keys(detailInfo).length">
    <div v-if="detailInfo.desc !== ''">
      <div class="left"></div>
      <div class="center">
        {{ detailInfo.desc }}
      </div>
      <div class="right"></div>
    </div>
    <div v-for="item in detailInfo.detailImage">
      <div class="itemKey">{{item.key}}</div>
      <div v-for="item in item.list">
        <img :src="item" alt="" class="detailImage" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailGoodsInfo",
  props:{
    detailInfo:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  methods:{
    imageLoad(){
      this.$emit('imageLoad')
    }
  }
}
</script>

<style scoped>
.goodsInfo{
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 3px rgba(100,100,100,.3) solid;
  width: 96%;
  margin: 0 auto;
}
 .left,.right {
   position: relative;
   width: 100px;
   height: 2px;
   background-color: rgba(100,100,100,.3);
 }
 .right{
   float: right;
 }
 .left::before{
   content:'';
   width: 5px;
   height: 5px;
   background-color: #222222;
   position: absolute;
   left: 0;
   top: 2px;
 }
.right::before {
  content:'';
  width: 5px;
  height: 5px;
  background-color: #222222;
  position: absolute;
  right: 0;
  top: -5px;
}
 .center{
   padding: 15px 10px;
 }
 .detailImage{
   width: 100%;
 }
 .itemKey {
   margin: 10px 0;
   width: 100%;
   position: relative;
   text-align: center;
   padding: 10px 0;
   font-size: 16px;
   color: #222222;
 }
 .itemKey::after{
   content:'';
   width: 100%;
   height: 2px;
   border: 1px rgba(100,100,100,.2) dashed;
   position: absolute;
   left: 0;
   top: 18px;
 }
</style>
