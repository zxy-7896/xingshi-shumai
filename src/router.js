import { createRouter, createWebHistory } from 'vue-router'

// 引入所有页面
import Home from './views/Home.vue'
import ThreeD from './views/ThreeD.vue'
import ArExperience from './views/ArExperience.vue'
import Knowledge from './views/Knowledge.vue'
import Community from './views/Community.vue'

const routes = [
  { path: '/', component: Home },           // 首页
  { path: '/3d', component: ThreeD },       // 3D 页面
  { path: '/ar', component: ArExperience }, // AR 页面
  { path: '/knowledge', component: Knowledge },
  { path: '/community', component: Community }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router