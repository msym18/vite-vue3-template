import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'
const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
})
// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    // throw new Error('123') // response会执行
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response.data
  },
  (error) => {
    const res = error.response
    if (res && res.data) {
      const code = res.status
      const msg = res.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, res)
    } else {
      ElMessage.error(`${error.message || '发生未知错误'}`)
    }
    return Promise.reject(res.data)
  }
)

export default axios
