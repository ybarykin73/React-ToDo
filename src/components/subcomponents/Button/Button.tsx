import React from 'react'
import Icon from '../Icon/Icon'
import { IProps } from './IButton'
import './Button.scss'

const Buttons = (props: IProps & {children: React.ReactNode}) => {
    const {
        children,
        text,
        onClick
    } = props

    return (
        <button 
            className='button'
            aria-label={text}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

const ButtonImage = (props: {iconName: string} ) => {
    const {
        iconName
    } = props

    if (!iconName) {
        return null
    }

    return (
        <div className='button__image'>
            <Icon iconId={iconName} />
        </div>
    )
}

const ButtonText = (props: {children: React.ReactNode}) => {
    const {
        children
    } = props

    return (
        <span>
            {children}
        </span>

    )
}

Buttons.ButtonImage = ButtonImage
Buttons.ButtonText = ButtonText

export default Buttons