import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import API from "@/pages/API.vue"
import Team from "@/pages/Team.vue"
import Contact from '@/pages/Contact.vue'
import Login from "@/pages/Login.vue"


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/api', component: API},
    { path: '/team', component: Team },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router