import React from "react"

import Checkbox from "../subcomponents/Checkbox/Checkbox"

const Theme = () => {
  const [theme, setTheme] = React.useState('dark')

  document.body.setAttribute('data-theme', theme)

  const setSomething = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="theme">
      <Checkbox
        something={theme === 'dark'} 
        label={`${theme} mode`}
        setSomething={setSomething}
      />
    </div>
  )
}

export default Theme