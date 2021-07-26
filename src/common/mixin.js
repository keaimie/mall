import {debounce} from "@/common/utils";

import backTop from "@/components/content/backTop/backTop";

export  const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null,
      newRefresh:null
    }
  },
  mounted() {
    // 1. 图片加载事件监听 （防抖）
    this.newRefresh =debounce(this.$refs.scroll.refresh,50);
    this.itemImgListener = () =>{
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  }
}
export const backTopMixin = {
  components:{
    backTop
  },
  data() {
    return {
      isShowBackTop:false
    }
  },
  methods:{
    backTop() {
      this.$refs.scroll.scrollTo(0,0)
    }
  }
}
