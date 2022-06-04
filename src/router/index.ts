import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import LocalCache from "@/utils/cache"
const Login = () =>
  import(/* webpackChunkName: "login" */ "../views/login/login.vue")
const Main = () =>
  import(/* webpackChunkName: "main" */ "../views/main/main.vue")

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/main",
    name: "main",
    component: Main
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = LocalCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }
})
export default router
