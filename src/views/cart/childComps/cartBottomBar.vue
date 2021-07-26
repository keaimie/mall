<template>
 <div class="bottomBar">
   <div>
     <div class="checkBox">
       <check-box :is-check="isAllCheck" @click.native="allCheckClick"/>
     </div>
     <span>全选</span>
   </div>
   <div class="btn">
     <div class="price">总计:{{getPrice}}</div>
     <div class="pay">去结算({{getCheckLength}})</div>
   </div>
 </div>
</template>

<script>
import checkBox from "@/components/common/checkBox/checkBox";
import {mapGetters} from 'vuex'
export default {
  name: "cartBottomBar",
  components: {
    checkBox
  },
  computed:{
    ...mapGetters(['cartList']),
    getPrice(){
      return '￥' + this.cartList.filter(item => item.check).reduce((price,item) =>{
        return price += item.count * item.price
      },0).toFixed(2)
    },
    getCheckLength(){
      return this.cartList.filter(item => item.check).length
    },
    isAllCheck(){
      if(!this.cartList.length) return false
      return !this.cartList.find(item => !item.check)
    }
  },
  methods:{
    allCheckClick(){
      if(this.isAllCheck){
        for(let item of this.cartList){
          this.$store.commit('changeState',item)
        }
      }
      else{
        for (let item of this.cartList.filter(item => !item.check)){
          this.$store.commit('changeState',item)
        }
      }
    }
  }
}
</script>

<style scoped>
 .bottomBar {
   display: flex;
   height: 49px;
   justify-content: space-between;
   background-color: white;
 }
 .bottomBar>div {
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .checkBox {
   width:40px;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .price {
   color: #000;
 }
 .pay {
   color:#FFFFFF;
   background-color:#CC4632;
   border-radius: 20px;
   padding: 10px 16px;
   margin-left: 15px;
   margin-right: 10px;
 }
</style>
