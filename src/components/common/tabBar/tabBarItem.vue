<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-select"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    link:String,
    activeColor:{
      type:String,
      default:'#ff6801'
    }
  },
  data() {
    return {

    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick() {
      if(this.isActive){
        return
      }
      else{
        this.$router.replace(this.link)
      }

    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  flex: 1;
  height: 49px;
  text-align: center;
}
.tab-bar-item img{
  margin-top: 2px;
  width: 24px;
  height: 24px;
}
</style>
