// service统一出口
import HYRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ""
      if (token) {
        // config.headers!.Authorization = `Bearer ${token}`
      }
      console.log(1)
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log(2)
      return error
    },
    responseInterceptor: (response) => {
      console.log(3)
      return response
    }
  }
})
export default hyRequest
