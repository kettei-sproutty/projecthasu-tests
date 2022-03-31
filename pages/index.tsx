import React from 'react'
import useUser, { logoutUser, useUpdateUser } from '../hooks/user'
import { useForm } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
import Input from '../components/input/input'

import type { NextPage } from 'next'

type UserFormType = {
  username: string
}

const HomePage: NextPage = () => {
  const { user, isLoading } = useUser()
  const updateUser = useUpdateUser()
  const { t } = useTranslation()

  const { register, handleSubmit } = useForm<UserFormType>()

  const handleLogin = async (data: UserFormType) => {
    if (data.username) {
      document.cookie = `auth=${data.username}`
      await updateUser()
    }
  }

  const handleLogout = async () => {
    return logoutUser().finally(updateUser)
  }

  if (isLoading) {
    return <div>Loading</div>
  }

  if (user.isAuthenticated) {
    return (
      <div className='container flex flex-col m-auto mt-2'>
        <p>
          {t('common:welcome')}, {user.username}
        </p>
        <button className='px-4 py2' onClick={handleLogout}>
          {t('common:logout')}
        </button>
      </div>
    )
  }

  return (
    <form className='container flex flex-col m-auto mt-2' onSubmit={handleSubmit(handleLogin)}>
      <Input label='Username' {...register('username')} />
      <button className='px-4 py2' type='submit'>
        {t('common:login')}
      </button>
    </form>
  )
}

export default HomePage
