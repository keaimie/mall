<template>
  <div class="shopInfo">
    <div class="infoTop">
      <img :src="shop.logo" alt="">
      <div>{{ shop.name }}</div>
    </div>
    <div class="infoMiddle">
      <div class="middleLeft">
        <div class="middleLeftItem">
          <div class="itemText"> {{shop.sells | sellCountFilter}}</div>
          <div>总销量</div>
        </div>
        <div class="middleLeftItem">
          <div class="itemText">{{shop.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
        <table class="middleRight">
          <tr class="tableTr" v-for="item in shop.score">
            <td>{{item.name}}</td>
            <td :class="[item.isBetter ? 'red' : 'green']">{{item.score}}</td>
            <td><span :class="[item.isBetter ? 'redBackground' : 'greenBackground']">{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShopInfo",
  props:{
    shop:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  filters:{
    sellCountFilter(count) {
      if(count < 10000) return count
      else return (count/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
.shopInfo{
  width: 96%;
  margin:0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  color: var(--color-text);
  border-bottom: 3px solid rgba(100,100,100,.1);
}
 .infoTop{
   display: flex;
   align-items: center;
   font-size: var(--font-size);
 }
 .infoTop img{
   width: 50px;
   height: 50px;
   border-radius: 50%;
   margin-left: 15px;
   margin-right: 10px;
   border: 1px solid rgba(0,0,0,.1);
 }
 .infoMiddle {
   color: #222;
   font-size: 15px;
   margin-top: 20px;
   display: flex;
   align-items: center;

 }
 .middleLeft{
   display: flex;
   flex: 1;
   padding: 0 20px;
   justify-content: space-around;
 }
 .middleLeftItem{
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .middleLeftItem .itemText{
   font-size: 24px;
   font-weight: bold;
   margin-bottom: 10px;
 }
 .middleRight{
   flex: 1;
   padding-left: 20px;
   border-left: 1px solid rgba(100,100,100,.1);
 }
 .middleRight td{
   padding: 5px 5px
 }
  .red{
    color: #f13e3a;
  }
  .green{
    color: #55f155;
  }
.redBackground{
  color: #ffffff;
  background-color: #f13e3a;
}
.greenBackground{
  color: #ffffff;
  background-color: #55f155;
}
</style>
