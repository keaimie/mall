export default {
  addCart(context,payload){
    return new Promise((resolve, reject) =>{
      let product = context.state.cartList.find(item => item.id === payload.id)
      if(product){
        context.commit('addCount',product)
        resolve('购物车商品数量加一')
      }
      else{
        payload.count = 1
        payload.check = true
        context.commit('addProduct',payload)
        resolve('增加购物车商品')
      }
    })
  }
}
