import React from 'react'

import './Button.scss'

const Button = (props) => {

    const {
        image,
        onClick
    } = props

    return (
        <button className='button'>
            <img 
                className='button__image' 
                src={image} 
                alt="trash"
                onClick={onClick}
            />
        </button>
    )
}

export default Button