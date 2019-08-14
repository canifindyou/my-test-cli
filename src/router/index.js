import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import  scroller from "../pages/scroller"
import allScroller from "../pages/allScroller"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'scroller',
      component: scroller
    },
    // {
    //   path: '/',
    //   name: 'allScroller',
    //   component: allScroller
    // },

  ]
})
