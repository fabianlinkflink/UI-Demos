import { createRouter, createWebHistory } from 'vue-router'

import landing from '@/views/App.vue'
import cards from '@/views/cards.vue'
import sidebar from '@/views/SideBar.vue' // import Sidebar view

/**
 * The router instance for the application.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: landing,
    },
    {
      path: '/cards',
      name: 'Cards',
      component: cards,
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: sidebar, // add route for Sidebar
    },
  ],
})

export default router