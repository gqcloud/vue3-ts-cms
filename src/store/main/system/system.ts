import { Module } from "vuex"
import { ISystemState } from "./type"
import { IRootState } from "../../type"

import { getPageListData } from "@/service/main/system/system"
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )

      const { list, totalCount } = pageResult.data
      commit("changeUserList", list)
      commit("changeUserCount", totalCount)
    }
  }
}

export default systemModule
