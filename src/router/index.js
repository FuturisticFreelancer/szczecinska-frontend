import { createRouter, createWebHistory } from 'vue-router'
import FrontendComponent from '../components/Frontend/FrontendComponent.vue'
import BackendComponent from '../components/Backend/BackendComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: FrontendComponent },
    { path: '/app', component: BackendComponent }
  ]
})

export default router
