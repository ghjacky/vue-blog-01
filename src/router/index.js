import Vue from 'vue'
import VueRouter from 'vue-router'
import {frontendRoutes} from "@/router/frontend";
import {backendRoutes} from "@/router/backend";
import {commonRoutes} from "@/router/common";

Vue.use(VueRouter)

export const router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: frontendRoutes.concat(backendRoutes).concat(commonRoutes)
})