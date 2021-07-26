<template>
  <div id="home">
    <home-nav-bar class="homeNav" />
    <tab-control ref="tabControlTop"
                 :titles="['流行','新款','精选']"
                 v-show="isTabShow"
                 class="tab-control-absolute"
                 @tabClick="tabClick" />
    <scroll class="scroll"
            ref="scroll"
            :probe-type="3"
            @scroll="scroll"
            :pull-up-load="true"
            @pullingUp="pullingUp">
      <home-swiper :banners="banners" @imageLoad="imageLoad" />
      <home-recommend :recommends="recommends" @imageLoad="imageLoad" />
      <home-feature @imageLoad="imageLoad" />
      <tab-control ref="tabControl"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick" />
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import HomeNavBar from "@/views/home/childComps/HomeNavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeRecommend from "@/views/home/childComps/HomeRecommend";
import HomeFeature from "@/views/home/childComps/HomeFeature";

import tabControl from "@/components/content/tabControl/tabControl";
import goodsList from "@/components/content/goods/goodsList";
import Scroll from "@/components/common/scroll/Scroll";

import {getHomeMultidata, getHomeGoods} from "@/network/home";
import {itemListenerMixin,backTopMixin} from "@/common/mixin";
import {debounce} from "@/common/utils";


export default {
  name: "Home",
  components:{
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    tabControl,
    goodsList,
    Scroll
  },
  data() {
    return {
      goodsType:'pop',
      banners:[],
      recommends:[],
      goods:{
        pop:{page: 0 ,list:[] },
        new:{page: 0 ,list:[] },
        sell:{page: 0 ,list:[] }
      },
      tabOffsetTop:0,
      isTabShow:false,
      scrollY:0,
      getTabControlTopY:null,
      windowWidth:document.documentElement.clientWidth
    }
  },
  mixins:[itemListenerMixin,backTopMixin],
  computed:{
    showGoods() {
      return this.goods[this.goodsType].list
    }
  },
  created(){
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    this.getTabControlTopY = debounce(() =>{
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop - this.$refs.tabControl.$el.offsetHeight
    },100)
  },
  mounted() {

  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.scrollY,0)
  },
  deactivated() {
    //保存Y轴坐标
    this.scrollY = this.$refs.scroll.scroll.y
    //取消全局事件的监听
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods:{
    //数据
    getHomeMultidata() {
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res =>{
        if(!res){
          console.log('已经加载全部数据')
        }else{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
        }

      })
    },
    //事件监听
    tabClick(index) {
      this.goodsType=index? index===1 ?'new':'sell':'pop'
      this.$refs.tabControl.currentIndex = index
      this.$refs.tabControlTop.currentIndex = index
      if (this.$refs.scroll.scroll.y <= -this.tabOffsetTop){
        this.$refs.scroll.scrollTo(0,-this.tabOffsetTop,500)
      }

    },
    scroll(position) {
      // 1.回到顶部按钮是否显示
      this.isShowBackTop= position.y<-700
      // 2. tabControl是否吸顶
      this.isTabShow = position.y <= (-this.tabOffsetTop)
    },
    imageLoad() {
      this.newRefresh()
      this.getTabControlTopY()
    },
    pullingUp() {
      this.getHomeGoods(this.goodsType)
      this.$refs.scroll.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
}
.homeNav {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control-absolute{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}
.scroll {
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>
