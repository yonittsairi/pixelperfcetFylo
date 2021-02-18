import Vue from 'vue'

import Router from 'vue-router'

import Home from "@/views/Home.vue";

Vue.use(Router)
const routes = [

  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },

]

const router = new Router({
  routes
})

export default router
