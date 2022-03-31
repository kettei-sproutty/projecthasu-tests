import useSWR, { useSWRConfig } from 'swr'
import fetcher from './utils/fetcher'
import axios from 'axios'

const useUser = () => {
  const { data, error } = useSWR('/api/auth', fetcher)

  return {
    user: data,
    error,
    isLoading: !data && !error,
  }
}

export const useUpdateUser = () => {
  const { mutate } = useSWRConfig()

  return () => mutate('/api/auth')
}

export const logoutUser = () => {
  return axios.post('/api/auth', { logout: true })
}

export default useUser
