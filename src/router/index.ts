import { createRouter, createWebHistory } from 'vue-router'

import landing from '@/views/landing.vue'
import cards from '@/views/cards.vue'
import sidebar from '@/views/SideBar.vue'

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
      component: sidebar,
    },
  ],
})

export default router