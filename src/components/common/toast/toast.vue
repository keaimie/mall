<template>
  <div v-show="isShow" class="toast">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "toast",
  data(){
    return {
      message:'默认文字',
      isShow:false,
      timer:null
    }
  },
  methods:{
    show(message='默认文字',time=2000) {
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.isShow = true
      this.message =message
      this.timer = setTimeout(() =>{
        this.isShow = false
        this.message ='默认文字'
      },time)
    }
  }
}
</script>

<style scoped>
 .toast{
   position: fixed;
   top: 50%;
   left: 50%;
   z-index:999;
   transform: translate(-50%,-50%);
   padding: 8px 10px;
   color: #FFFFFF;
   background-color: rgba(0,0,0,.7);
 }
</style>
