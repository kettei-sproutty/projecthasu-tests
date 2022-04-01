import useSWR, { useSWRConfig } from 'swr'
import fetcher from './utils/fetcher'
import axios from 'axios'

const useUser = () => {
  const { data, error } = useSWR('/api/auth', fetcher)
  const { mutate } = useSWRConfig()

  const updateUser = () => {
    return mutate('/api/auth')
  }

  const logoutUser = async () => {
    return axios.post('/api/auth', { logout: true }).finally(updateUser)
  }

  return {
    user: data,
    error,
    updateUser,
    logoutUser,
    isLoading: !data && !error,
  }
}
export const logoutUser = () => {}

export default useUser
