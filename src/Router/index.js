

import homePageVue from "@/views/homePage.vue";
import Contact from "@/views/ContactPage.vue"
import RegisterVue from "@/views/Register.vue";

import Vue from "vue"
import VueRouter from "vue-router"


Vue.use(VueRouter);

const routes = [
    {path: '/', component: homePageVue, name: "homePage"},
    {path: '/contact', component:Contact, name:"contact"},
    {path: '/register', component:RegisterVue, name:"register"}
]


const router = new VueRouter ({
    mode: "history",
    routes
})

export default router;
