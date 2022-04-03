import { Button } from '@hasu/design'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemePage: NextPage = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const changeTheme = () => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')

  if (!mounted) return null

  return (
    <div className='container mx-auto'>
      <img src='/icons/favicon-310x310.png'></img>
      <p>Current theme: {resolvedTheme}</p>
      <Button onClick={changeTheme}>Change Theme</Button>
    </div>
  )
}

export default ThemePage
