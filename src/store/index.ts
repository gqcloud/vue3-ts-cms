import { createStore } from "vuex"
import { IRootState } from "./type"

import login from "./login/login"

export default createStore<IRootState>({
  state: () => {
    return {
      name: "code",
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
