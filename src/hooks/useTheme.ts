import React from "react"

type Mode = 'dark' | 'light'

const useTheme = () => {
  const [theme, setTheme] = React.useState<Mode>(localStorage.getItem('theme') as Mode || 'dark')
  localStorage.setItem('theme', theme)
  document.body.setAttribute('data-theme', theme)

  return {
    theme,
    setTheme
  }
}

export default useTheme