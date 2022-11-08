import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/Aboutview.vue'
import Learnview from '../views/Learnview.vue'
import Testview from '../views/Testview.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/learn',
    name: 'learn',
    component: Learnview
  },
  {
    path: '/test',
    name: 'test',
    component: Testview
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})
export default router
