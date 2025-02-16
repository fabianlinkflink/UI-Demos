import { createRouter, createWebHistory } from 'vue-router'

import App from '@/views/App.vue'
import cards from '@/views/cards.vue'

/**
 * The router instance for the application.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
    },
    {
      path: '/cards',
      name: 'Cards',
      component: cards,
    },
  ],
})

export default router