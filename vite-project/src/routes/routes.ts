import { createMemoryHistory, createRouter } from 'vue-router'

import Commits from '@/pages/Commits.vue'


const routes = [
  { path: '/', component: Commits },

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;