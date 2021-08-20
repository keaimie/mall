module.exports = {
  plugins:{
    "postcss-px-to-viewport":{
      viewportWidth: 375, //视窗宽度，对应设计稿宽度
      viewportHeight: 667,//视窗高度，对应设计稿高度（可以不写
      unitPrecision: 5,//保留多少位小数
      viewportUnit: 'vw',//转化视窗单位 建议vw
      selectorBlackList: [],//不转换的类
      minPixelValue: 1,//小于等于 不转换
      mediaQuery: false //允许在媒体查询中转化‘px’
    }
  }
}
