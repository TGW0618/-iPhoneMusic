import axios from 'axios'
import { useAuthStore } from '../store/auth'


// 创建 Axios 实例
const api = axios.create({
  baseURL: '/api', // 设置 API 基础路径
  timeout: 5000,    // 设置请求超时
})

// 请求拦截器：在请求头中添加 token
api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()
    const token = authStore.token || localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器：处理 token 失效
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const authStore = useAuthStore()
      authStore.clearAuth()
      window.location.href = '/Homepage'  // Token 失效，跳转
    }
    return Promise.reject(error)
  }
)



export default api
