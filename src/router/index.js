import { createWebHistory, createRouter } from "vue-router";
//views
import HomeVue from "../views/Home.vue"
import RegisterVue from "../views/Register.vue"
import AboutVue from "../views/About.vue"
import ContributeVue from "../views/Contribute.vue"

const routes = [
    { path: '/', name: 'Home', component: HomeVue },
    { path: '/register', name: 'Register', component: RegisterVue },
    { path: '/about', name: 'About', component: AboutVue },
    { path: '/contribute', name: 'Contribute', component: ContributeVue },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router