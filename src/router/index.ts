import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import LocalCache from "@/utils/cache"
const Login = () =>
  import(/* webpackChunkName: "login" */ "../views/login/login.vue")
const Main = () =>
  import(/* webpackChunkName: "main" */ "../views/main/main.vue")
const NotFound = () =>
  import(/* webpackChunkName: "main" */ "../views/notfound/notFound.vue")

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
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
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound
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
