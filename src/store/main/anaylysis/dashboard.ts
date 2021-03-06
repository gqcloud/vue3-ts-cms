import { Module } from "vuex"
import { IDashboardState } from "./type"
import { IRootState } from "@/store/type"

import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from "@/service/main/analysis/dashboard"
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryFoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryFoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      commit("changeCategoryGoodsCount", categoryCountResult.data)
      const categorySaleResult = await getCategoryGoodsSale()
      commit("changeCategoryGoodsSale", categorySaleResult.data)
      const categoryFavorResult = await getCategoryGoodsFavor()
      commit("changeCategoryGoodsFavor", categoryFavorResult.data)
      const addressGoodsResult = await getAddressGoodsSale()
      commit("changeAddressGoodsSale", addressGoodsResult.data)
    }
  }
}

export default dashboardModule
