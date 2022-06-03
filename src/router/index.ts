import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
const Login = () =>
  import(/* webpackChunkName: "login" */ "../views/login/login.vue")

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
