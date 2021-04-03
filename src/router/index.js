import Vue from 'vue'
import VueRouter from 'vue-router'
import GuideMain from "@/views/styleGuide/Main";
import GuideForm from "@/views/styleGuide/Form";
import GuideTest from "@/views/styleGuide/Test";

Vue.use(VueRouter)

const routes = [
  // 기본 루트는 설정 안하면 App.vue가 되는듯
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
      path: '/styleGuide',
      name: 'form',
      components: {
          default: GuideMain
      }
  },
  {
      path: '/styleGuide/form',
      name: 'form',
      components: {
          default: GuideForm
      }
  },
  {
      path: '/styleGuide/test',
      name: 'form',
      components: {
          default: GuideTest
      }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
