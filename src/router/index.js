import Vue from 'vue'
import Router from 'vue-router'


import home from "../pages/home"//主页
import majorActive from  "../pages/majorActive/majorActive.vue"//主页活动
import detail from "../pages/majorActive/detail.vue"
import list from "../pages/majorActive/list.vue"

import teacherProject from "../pages/teachProject/teachProject.vue"
import tpList from "../pages/teachProject/list.vue"
import tpDetail from "../pages/teachProject/detail.vue"

import workPlan from "../pages/workPlan/workPlan.vue"
import wpList from "../pages/workPlan/list.vue"
import wpDetail from "../pages/workPlan/detail.vue"

import workRules from "../pages/workRules/workRules.vue"
import wrDetail from "../pages/workRules/detail.vue"

import sVoice from "../pages/sVoice/sVoice.vue"

import personPage from "../pages/personPage.vue"
Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/',
      redirect: '/home',
  },
   {
     path: '/home',
     name: '首页',
     component: home
   }, 
   {
    path: '/sVoice',
    name: '思维之声',
    component: sVoice
  }, 
   {
    path: '/personPage',
    name: '个人主页',
    component: personPage
  }, 
   {
     path:"/majorActive",
     name:"专业活动",
     component:majorActive,
     children:[
      {
        path: '/',
        redirect: '/majorActive/list',
    },
    {
      path:"/majorActive/list",
      name:"活动",
      component:list
    },
       {
         path:"/majorActive/list/detail",
         name:"详情",
         component:detail
       },
     
     ]
   },


   {
    path:"/teacherProject",
    name:"教学项目",
    component:teacherProject,
    children:[
     {
       path: '/',
       redirect: '/teacherProject/tpList',
   },
   {
     path:"/teacherProject/tpList",
     name:"项目列表",
     component:tpList
   },
      {
        path:"/teacherProject/tpList/tpDetail",
        name:"详情",
        component:tpDetail
      },
    ]
  },
    


      {
        path:"/workPlan",
        name:"计划",
        component:workPlan,
        children:[
         {
           path: '/',
           redirect: '/workPlan/wpList',
       },
       {
         path:"/workPlan/wpList",
         name:"计划列表",
         component:wpList
       },
          {
            path:"/workPlan/wpList/wpDetail",
            name:"详情",
            component:wpDetail
          },
    ]
  },

  {
    path:"/workRules",
    name:"工作制度",
    component:workRules,
    children:[
     {
       path: '/',
       redirect: '/workRules/wrDetail',
   },
   {
     path:"/workRules/wrDetail",
     name:"工作制度",
     component:wrDetail
   },
    
]
}
   

  ]
   })
