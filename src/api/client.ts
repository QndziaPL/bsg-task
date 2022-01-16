import axios from "axios"
import { clearTokens, getAccessToken } from "./tokenStorage"
import { publicRoutes } from "../routes/routes"

const apiUrl = "https://thebetter.bsgroup.eu"

const axiosInstance = axios.create({
  baseURL: apiUrl,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken()

    if (token) {
      //@ts-ignore
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const promiseError = Promise.reject(error)
    const noAccess = error.response.status === 403
    const isOnLoginPage = window.location.pathname === publicRoutes.INDEX
    const token401 = error.response.status === 401

    if (window.location.pathname.includes("/video/") && noAccess) {
      return promiseError
    }

    if ((noAccess && !isOnLoginPage) || (token401 && !isOnLoginPage)) {
      clearTokens()
      window.location.href = "/"
      return promiseError
    }

    return promiseError
  },
)

export default axiosInstance
