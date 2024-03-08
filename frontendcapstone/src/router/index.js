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
    path: '/dailyfeed',
    name: 'dailyfeed',
    
    component: () => import('../views/DailyFeed.vue')
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
    path: '/contact',
    name: 'contact',
    
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
