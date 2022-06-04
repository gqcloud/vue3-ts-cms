import { RouteRecordRaw } from "vue-router"
// const path = require("path")

export function mapMenusToRoute(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 先加载所有路由
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context("../router/main", true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })
  //   根据菜单获取需要添加的路由

  return routes
}
