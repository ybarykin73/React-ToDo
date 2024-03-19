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
        <div className='list-wrapper'>
            <ul className='list'>
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
        </div>
    )
}

export default List
