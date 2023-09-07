import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardView from "../views/BoardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView
    },
    {
      path: '/board/:id',
      name: 'detail',
      component: () => import("../views/BoardDetailView.vue")
    },
    {
      path: "/post",
      name: 'post',
      component : () => import ("../views/PostView.vue")
    },
    {
      path: "/post/:id",
      name: 'postDetail',
      component : () => import ("../views/PostViewDetail.vue")
    },

  ]
})

export default router
