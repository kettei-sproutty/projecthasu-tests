import React from 'react'
import useUser from '../hooks/user'
import { useForm } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
import Button from '@/components/button'
import Input from '@/components/input'

import type { NextPage } from 'next'

type UserFormType = {
  username: string
}

const HomePage: NextPage = () => {
  const { user, isLoading, updateUser, logoutUser } = useUser()
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormType>()

  const handleLogin = async (data: UserFormType) => {
    document.cookie = `auth=${data.username}`
    await updateUser()
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
        <Button onClick={logoutUser}>{t('common:logout')}</Button>
      </div>
    )
  }

  return (
    <form className='container flex flex-col m-auto mt-2' onSubmit={handleSubmit(handleLogin)}>
      <Input
        label='Username'
        error={errors.username}
        {...register('username', { required: t('common:field-required', { name: 'username' }) })}
      />
      <Button type='submit'>{t('common:login')}</Button>
    </form>
  )
}

export default HomePage
