import axios from 'axios'

export const BASE_URL = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/`

axios.defaults.withCredentials = true
const accessToken = localStorage.getItem('accessToken')

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const setClientHeaders = (authToken: string | null) => {
  publicRequest.interceptors.request.use(config => {
    config.headers['Authorization'] = authToken
    return config
  })
}

publicRequest.interceptors.request.use(
  config => {
    if (!config.headers.Authorization) {
      config.headers['Authorization'] = accessToken
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  },
)

publicRequest.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    if (error.response?.status === 403) {
      console.log('토큰 없음')
      console.log(error)

      error.config.headers = {
        Authorization: accessToken,
      }
    } else if (error.response?.status === 401) {
      console.log('토큰 만료')
      console.log(error)
    } else {
      return error
    }
  },
)
