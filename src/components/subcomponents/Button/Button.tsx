import React from 'react'
import Icon from '../Icon/Icon'
import { IProps } from './IButton'
import './Button.scss'

const Button: React.FC<IProps> = (props) => {

    const {
        text,
        onClick,
        iconName
    } = props

    return (
        <button 
            className={`button ${iconName ? 'button--image' : ''}`}
            aria-label={text}
            onClick={onClick}
        >
            {
                !iconName 
                ?
                    <span>{text}</span>
                :
                <div className='button__image'>
                    <Icon iconId={iconName} />
                </div>
            }
        </button>
    )
}

export default Button