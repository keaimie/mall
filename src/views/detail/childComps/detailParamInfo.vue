<template>
  <div class="paramInfo" v-if="Object.keys(paramInfo).length">
    <div class="goodsParam" v-if="paramInfo.infos.length">
      <table>
       <tr v-for="(item,index) in paramInfo.infos" :key="index">
         <td class="itemKey">{{item.key}}</td>
         <td class="itemValue">{{item.value}}</td>
       </tr>
      </table>
    </div>
    <div class="goodsSize" v-if="paramInfo.sizes[0].length">
      <table>
        <tr v-for="(x,index) in paramInfo.sizes[0]" :key="index">
          <td v-for="item in  x">
            {{item}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailParamInfo",
  props:{
    paramInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.paramInfo{
  padding-top: 15px;
  padding-bottom: 25px;
  width: 96%;
  margin: 0 auto;
  border-bottom: 3px solid rgba(100,100,100,.1);
}
.goodsParam table,.goodsSize table{
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse
}
.goodsSize table{
  table-layout: fixed;
  word-wrap: break-word;
}
.goodsParam table td,.goodsSize table td{
  border-bottom: 1px rgba(100,100,100,.2) solid;
  padding:15px 10px;
}

.itemKey {
  white-space:nowrap
}
.itemValue{
  color: var(--color-high-text);
}
</style>
