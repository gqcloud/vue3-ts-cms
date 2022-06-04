// service统一出口
import HYRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

import Localcache from "@/utils/cache"
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = Localcache.getCache("token")
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (response) => {
      return response
    }
  }
})
export default hyRequest
