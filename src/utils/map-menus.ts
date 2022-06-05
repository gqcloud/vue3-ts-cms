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
  const _recurseGetRoutes = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoutes(menu.children)
      }
    }
  }

  _recurseGetRoutes(userMenus)
  return routes
}
