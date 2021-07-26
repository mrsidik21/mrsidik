import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Layout,
      redirect: '',
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/pages/home/index.vue')
        }
      ]
    }
  ]
})

export default router
