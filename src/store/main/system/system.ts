import { Module } from "vuex"
import { ISystemState } from "./type"
import { IRootState } from "../../type"

import { getPageListData } from "@/service/main/system/system"

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "user":
            return state.userList
          case "role":
            return state.roleList
          default:
            break
        }
      }
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const pageName = payload.pageName
      let pageUrl = ""
      switch (pageName) {
        case "user":
          pageUrl = "/users/list"
          break
        case "role":
          pageUrl = "/role/list"
          break
        default:
          break
      }

      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      const { list, totalCount } = pageResult.data
      switch (pageName) {
        case "user":
          commit(`changeUserList`, list)
          commit(`changeUserCount`, totalCount)
          break
        case "role":
          commit(`changeRoleList`, list)
          commit(`changeRoleCount`, totalCount)
          break
        default:
          break
      }
      // commit(`change${pageName}List`, list)
      // commit(`change${pageName}Count`, totalCount)
    }
  }
}

export default systemModule
