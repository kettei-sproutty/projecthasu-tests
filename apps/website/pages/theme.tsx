import { Button } from '@hasu/design'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemePage: NextPage = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  if (!mounted) return null

  return (
    <div>
      <p>Current theme: {theme}</p>
      <Button onClick={changeTheme}>Change Theme</Button>
    </div>
  )
}

export default ThemePage
