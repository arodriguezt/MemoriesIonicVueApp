import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../views/MemoriesPage.vue'
const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path:'/memories',
    component: MemoriesPage

  },
  {
    path:'/memories/:id',
    //() => import('../views/DetailsPage.vue') LAZY LOAD nomes el carregarem si realment el necessitem
    component: () => import('../views/DetailsPage.vue')

  },
  {
    path:'/memories/add',
    //() => import('../views/DetailsPage.vue') LAZY LOAD nomes el carregarem si realment el necessitem
    component: () => import('../views/AddMemoryPage.vue')

  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
