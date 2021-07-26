<template>
 <div id="detail">
   <detail-nav-bar @titleClick="titleClick" ref="navBar"/>
   <scroll ref="scroll"
           @scroll="scroll"
           :pull-up-load="false"
           :probe-type="3"
           class="scroll">
     <detailSwiper :banners="topImage" ref="swiper" @imageLoad="imageLoad"/>
     <detail-base-info :goods="goods"/>
     <detail-shop-info :shop="shop"/>
     <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
     <detail-param-info :param-info="paramInfo" ref="param"/>
     <detail-comment-info :comment-info="commentInfo" ref="comment"/>
     <goods-list :goods="recommendInfo" ref="recommend"/>
   </scroll>
   <back-top @click.native="backTop" v-show="isShowBackTop"/>
   <detail-tab-bar @addCart="addCart"/>
 </div>
</template>

<script>
import detailNavBar from "@/views/detail/childComps/detailNavBar";
import detailSwiper from "@/views/detail/childComps/detailSwiper";
import detailBaseInfo from "@/views/detail/childComps/detailBaseInfo";
import detailShopInfo from "@/views/detail/childComps/detailShopInfo";
import detailGoodsInfo from "@/views/detail/childComps/detailGoodsInfo";
import detailParamInfo from "@/views/detail/childComps/detailParamInfo";
import detailCommentInfo from "@/views/detail/childComps/detailCommentInfo";
import detailTabBar from "@/views/detail/childComps/detailTabBar";
import goodsList from "@/components/content/goods/goodsList";

import {getDetail,getRecommend,goods,shop,paramInfo} from "@/network/detail";

import Scroll from "@/components/common/scroll/Scroll";
import {itemListenerMixin,backTopMixin} from "@/common/mixin";
import {debounce} from "@/common/utils";

import {mapActions} from 'vuex'

export default {
  name: "detail",
  components:{
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    detailTabBar,
    goodsList,
    Scroll
  },
  data() {
    return {
      id:'',
      topImage:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommendInfo:[],
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0
    }
  },
  mixins:[itemListenerMixin,backTopMixin],
  created() {
    this.id = this.$route.params.id
    getDetail(this.$route.params.id).then(res => {
      let data = res.result
      //轮播图
      this.topImage = data.itemInfo.topImages
      //商品基本信息
      this.goods = new goods(data.itemInfo,data.columns,data.shopInfo.services)
      //商家基本信息
      this.shop = new shop(data.shopInfo)
      //商品详情
      this.detailInfo = data.detailInfo
      //商品参数
      this.paramInfo =new paramInfo(data.itemParams.info, data.itemParams.rule)
      //评论
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    })
    //推荐
    getRecommend().then(res =>{
      this.recommendInfo=res.data.list
    })
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0,
        this.$refs.param.$el.offsetTop - 44,
        this.$refs.comment.$el.offsetTop - 44,
        this.$refs.recommend.$el.offsetTop - 44)
    },200)
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$off('itemImgListener',this.itemImgListener)
  },
  methods:{
    ...mapActions({
      cart:'addCart'
    }),
    imageLoad(){
      this.newRefresh()
      this.getThemeTopY()
    },
    titleClick(index) {
     this.$refs.scroll.scrollTo(0,-this.themeTopYs[index])
    },
    scroll(position){
      //加强版 可添加number最大数 直接遍历length-1
      //Number.MAX_VALUE
      this.isShowBackTop= position.y<-700
      let y = -position.y
      let length = this.themeTopYs.length
      for(let i = 0;i < length;i++){
        if(this.currentIndex !== i &&((i < length - 1 && y >= this.themeTopYs[i] && y < this.themeTopYs[i+1])
        || (i===length-1 && y >= this.themeTopYs[i]))){
          this.currentIndex = i
          this.$refs.navBar.currentIndex = i
        }
      }

      // if (y < this.themeTopYs[1]){
      //   this.$refs.navBar.currentIndex = 0
      // }else if(y < this.themeTopYs[2]){
      //   this.$refs.navBar.currentIndex = 1
      // }else if(y < this.themeTopYs[3]){
      //   this.$refs.navBar.currentIndex = 2
      // }else{
      //   this.$refs.navBar.currentIndex = 3
      // }
    },
    addCart() {
      let product = {
        id:this.id,
        title:this.goods.title,
        desc:this.goods.desc,
        imgUrl:this.topImage[0],
        price:this.goods.newPrice
      }
      this.cart(product).then(res => {
        this.$toast.show(res)
      })
    }

  }
}
</script>

<style scoped>
#detail {
  position: relative;
  background-color: white;
}
.scroll{
  height: calc(100vh - 93px) ;
  overflow: hidden;
}
</style>
