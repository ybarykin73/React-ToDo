import React from 'react'

import { IProps } from './IButton'
import './Button.scss'

const Button: React.FC<IProps> = (props) => {
    const {
        style,
        children,
        onClick,
        ariaLabel
    } = props

    return (
        <button 
            className={`button button--${style}`}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button