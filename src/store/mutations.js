export default {
  addCount(state,payload){
    payload.count++
  },
  addProduct(state,payload){
    state.cartList.push(payload)
  },
  changeState(state,payload){
    payload.check = !payload.check
  }
}
