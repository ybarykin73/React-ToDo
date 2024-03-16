import React from 'react'
import Error from '../Error/Error'
import Listitem from '../ListItem/ListItem'

import { useTodoList } from '../../context/TodoContext'

import { IProps } from './IList'
import './List.scss'

const List: React.FC<IProps> = () => {

    const list = useTodoList()

    if (!list.length) {
        return (
            <Error />
        )
    }

    return (
        <ul>
            {
                list.map(item => (
                    <Listitem 
                        key={item.id}
                        id={item.id}
                        isChecked={item.isChecked}
                        text={item.text}
                    />
                ))
            }
        </ul>
    )
}

export default List
