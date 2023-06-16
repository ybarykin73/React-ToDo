import React from 'react'
import { IProps } from './IButton'
import './Button.scss'

const Button: React.FC<IProps> = (props) => {

    const {
        text,
        image,
        onClick,
    } = props

    return (
        <button 
            className={`button ${image ? 'button--image' : ''}`}
            aria-label={text}
        >
            {
                !image 
                ?
                    <span>{text}</span>
                :
                <img 
                    className='button__image' 
                    src={image} 
                    alt={text}
                    onClick={onClick}
                />
            }
        </button>
    )
}

export default Button