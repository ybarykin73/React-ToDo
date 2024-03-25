import Theme from "../Theme/Theme"

import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <h1 className='header__title'>
        TODO list
      </h1>
      <Theme />
    </header>
  )
}

export default Header