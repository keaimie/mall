import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

const home = ()=> import('@/views/home/Home')
const category = () => import('@/views/category/category')
const cart = () => import('@/views/cart/cart')
const profile = () => import('@/views/profile/profile')
const detail = () => import('@/views/detail/detail')

const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/shop',
    component:category
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/detail/:id',
    component:detail
  }
]

export default new VueRouter({
  routes,
  mode:'history'
})
