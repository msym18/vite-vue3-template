import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'HomeIndex',
        component: Home
      }
    ]
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: import('@/views/vuex/demo1.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios/demo1.vue') // 懒加载组件
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  console.log('to, from', to, from)
})

export default router
