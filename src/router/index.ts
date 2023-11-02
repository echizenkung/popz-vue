import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../Layout.vue'),
      children: [
        {
          name: "Main",
          path: "/",
          component: () => import('../views/Main.vue'),
        }
      ]
    },

  ]
})

export default router
