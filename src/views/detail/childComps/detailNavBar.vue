<template>
  <nav-bar>
    <template v-slot:left>
      <img src="~@/assets/img/common/back.svg" alt="" class="back" @click="backClick">
    </template>
    <template v-slot:center>
      <div class="title">
        <div v-for="(item,index) in titles"
             @click="titleClick(index)"
             :class="{active:currentIndex === index}">
          {{item}}</div>
      </div>
    </template>
    <template v-slot:right>

    </template>
  </nav-bar>
</template>

<script>
import navBar from "@/components/common/navBar/navBar";
export default {
  name: "detailNavBar",
  components:{
    navBar
  },
  data() {
    return{
      currentIndex:0,
      titles:['商品','参数','评论','推荐']
    }
  },
  methods:{
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    backClick() {
      this.$router.back()
    }
  }

}
</script>

<style scoped>
.active{
  color: var(--color-high-text);
}
.title {
  display: flex;
  justify-content: space-around;
  font-size: 13px;
}
.back {
  vertical-align:middle;
}
</style>
