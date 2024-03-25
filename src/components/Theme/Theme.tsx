import useTheme from "../../hooks/useTheme"

import Checkbox from "../subcomponents/Checkbox/Checkbox"

const Theme = () => {
  const {theme, setTheme} = useTheme()

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