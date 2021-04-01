import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GuideMain from "@/views/styleGuide/Main";
import GuideForm from "@/views/styleGuide/Form";
import GuideTest from "@/views/styleGuide/Test";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
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
