import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //주문
    {
      path: '/',
      name: 'home',
      component: () => import('../views/order/MainView.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/order/ListView.vue')
    },
    {
      path: '/orders/register',
      name: 'order-register',
      component: () => import('../views/order/RegisterView.vue')
    },
    {
      path: '/orders/register/:id',
      name: 'order-update',
      component: () => import('../views/order/RegisterView.vue')
    },
    {
      path: '/orders/:id',
      name: 'order-detail',
      component: () => import('../views/order/DetailView.vue')
    },

    //관리자 메뉴
    {
      path: '/admin/home',
      name: 'menus-home',
      component: () => import("../views/admin-menu/MainView.vue")
    },
    {
      path: '/admin/menus',
      name: 'menus',
      component: () => import("../views/admin-menu/ListView.vue")
    },

    {
      path: '/admin/menus/register',
      name: 'menus-register',
      component: () => import("../views/admin-menu/RegisterView.vue")
    },
    {
      path: '/admin/menus/:id',
      name: 'menus-detail',
      component: () => import("../views/admin-menu/DetailView.vue")
    },
    //게시글 업데이트 창
    {
      path: '/admin/menus/register/:id',
      name: 'menus-update',
      component: () => import("../views/admin-menu/RegisterView.vue")
    },

  ]
})

export default router


//Routes 배열 설계할 때 path에 변수 들어가는 애들 (ex. id) 
// -> 밑으로 가게 해야 안씹힘