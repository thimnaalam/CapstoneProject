import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/podcast',
    name: 'podcast',
    
    component: () => import('../views/PodcastView.vue')
  },
  {
    path: '/events',
    name: 'events',
    
    component: () => import('../views/EventsView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/loginRegister',
    name: 'loginRegister',
    
    component: () => import('../views/loginRegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


