import React from 'react'

import './Button.scss'

const Button = (props) => {

    const {
        text,
        image,
        onClick
    } = props

    return (
        <button className={`button ${image ? 'button--image' : ''}`}>
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