import homePageVue from "@/views/homePage.vue";

import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

const routes = [
    {path: '/', component: homePageVue, name: "homePage"}
]


const router = new VueRouter ({
    mode: "history",
    routes
})

export default router;
