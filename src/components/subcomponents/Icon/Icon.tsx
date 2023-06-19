import React from 'react'
import sprite from '../../../Image/sprite.svg'
import { IProps } from './IIcon'

import './Icon.scss'

const Icon: React.FC<IProps> = (props) => {
    const {
        iconId,
        size = 20
    } = props

    return (
        <svg className="icon" width={size} height={size}>
            <use xlinkHref={`${sprite}#${iconId}`}></use>
        </svg>
    )
}

export  default Icon