import { Module } from "vuex"
import { ILoginState } from "./type"
import { IRootState } from "../type"

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuById
} from "@/service/login/login"
import { IAccount } from "@/service/login/type"

import LocalCache from "@/utils/cache"

import { mapMenusToRoute, mapMenusToPermission } from "@/utils/map-menus"

import router from "@/router/index"
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: "",
      userinfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userinfo: any) {
      state.userinfo = userinfo
    },
    changeUserMenus(state, userMenu: any) {
      state.userMenus = userMenu
      const routes = mapMenusToRoute(userMenu)
      routes.forEach((item) => {
        router.addRoute("main", item)
      })

      const permissons = mapMenusToPermission(userMenu)
      state.permissions = permissons
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit("changeToken", token)
      LocalCache.setCache("token", token)

      dispatch("getInitialDataAction", null, { root: true })

      const userInfoResult = await requestUserInfoById(id)
      const userinfo = userInfoResult.data
      commit("changeUserInfo", userinfo)
      LocalCache.setCache("userinfo", userinfo)

      const userMenuResult = await requestUserMenuById(userinfo.role.id)
      const userMenus = userMenuResult.data
      commit("changeUserMenus", userMenus)
      LocalCache.setCache("userMenus", userMenus)
      router.push("/main")
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = LocalCache.getCache("token")
      if (token) {
        commit("changeToken", token)

        dispatch("getInitialDataAction", null, { root: true })
      }
      const userinfo = LocalCache.getCache("userinfo")
      if (userinfo) {
        commit("changeUserInfo", userinfo)
      }
      const userMenus = LocalCache.getCache("userMenus")
      if (userMenus) {
        commit("changeUserMenus", userMenus)
      }
    }
  }
}

export default loginModule
