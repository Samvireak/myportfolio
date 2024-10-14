import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Team from "@/pages/Team/Team.vue"
import API from "@/pages/API/index.vue"
import Repository from '@/pages/Repository.vue'
import Contact from '@/pages/Contact.vue'
import Login from "@/pages/Login.vue"


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/team', component: Team },
    { path: '/api', component: API },
    { path: '/repos', component: Repository },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router