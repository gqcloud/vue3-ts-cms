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

import { mapMenusToRoute } from "@/utils/map-menus"

import router from "@/router/index"
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: "",
      userinfo: {},
      userMenus: []
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
      mapMenusToRoute(userMenu)
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit("changeToken", token)
      LocalCache.setCache("token", token)

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
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache("token")
      if (token) {
        commit("changeToken", token)
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
