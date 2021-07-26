<template>
  <div class="commentInfo" v-if="Object.keys(commentInfo).length">
    <div class="commentHead">
      <div>用户评论</div>
      <div>更多></div>
    </div>
    <div class="commentUser">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="commentText">
      {{commentInfo.content}}
    </div>
    <div v-if="commentInfo.images" class="commentImage">
        <img v-for="item in commentInfo.images" :src="item" alt="">
    </div>
    <div class="commentTags">
      <div class="tagsTime">{{getTime}}</div>
      <div class="tagsStyle">{{commentInfo.style}}</div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils";

export default {
  name: "detailCommentInfo",
  props:{
    commentInfo:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    getTime() {
      let date = new Date((this.commentInfo.created)*1000);
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>
.commentInfo {
  width: 96%;
  margin: 0 auto;
}
.commentHead {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 1px rgba(100,100,100,.1) solid;
}
.commentUser {
  display: flex;
  align-items: center;
  padding: 15px 0 10px 15px;
}
.commentUser img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.commentText {
  padding: 5px 0 12px 10px;
}
.commentImage {
  padding-left:10px;
  height: 70px;
  overflow: hidden;
}
.commentImage img{
  margin-right: 3px;
  width: 65px;
  height: 75px;
}
.commentTags {
  padding: 12px 0 15px 10px;
  display: flex;
  align-items: center;
  border-bottom: 3px rgba(100,100,100,.1) solid;
}
.tagsTime{
  margin-right: 10px;
}
</style>
