import Toast from "@/components/common/toast/toast";
const obj = {}
obj.install = function (Vue){
  const toastController =Vue.extend(Toast)
  const toast = new toastController()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}
export default obj
