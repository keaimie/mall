<template>
 <div class="tab-control">
   <div v-for="(item,index) in titles" class="tab-control-item" @click="itemClick(index)">
     <span :class="{active:currentIndex === index}">{{item}}</span>
   </div>
 </div>
</template>

<script>
export default {
  name: "tabControl",
  props:{
    titles:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index) {
      if(this.currentIndex === index){
        return
      }
      else{
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
}
</script>

<style scoped>
.tab-control {
  background-color: white;
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 6px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>
