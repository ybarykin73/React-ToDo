import React from 'react'

import { IProps } from './ICheckbox'
import './Checkbox.scss'

const Checkbox: React.FC<IProps> = (props) => {
  const {
    label,
    something,
    setSomething
  } = props

  return (
    <label className="checkbox">
      <span className="checkbox__label">{label}</span>
      <div className="checkbox__wrapper">
        <input 
        className="checkbox__input visually-hidden" 
        checked={something} 
        type="checkbox"
        onChange={setSomething}
      />
        <span className="checkbox__checked" />
      </div>
    </label>
  )
}

export default Checkbox