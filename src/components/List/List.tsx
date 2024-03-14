import React from 'react'
import { IProps } from './IList'
import Error from '../Error/Error'
import Listitem from '../ListItem/ListItem'

import { useTodoList , useDispatchTodoList } from '../../context/TodoContext'

import './List.scss'

const List: React.FC<IProps> = () => {

    const list = useTodoList()
    const dispatch = useDispatchTodoList()

    const removeTask = (id: number) => {
        dispatch({
            type: 'remove',
            id: id
        })
    }

    const editTask = (idTask: number, newText :string) => {
        dispatch({
            type: 'edit',
            id: idTask,
            text: newText
        })
    }

    const compliteTask = (idTask: number) => {
        dispatch({
            type: 'complite',
            id: idTask
        })
    }

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
                        complite={(e) => compliteTask(e)}
                        delite={(e) => removeTask(e)}
                        edit={(e,t) => editTask(e,t)}
                    />
                ))
            }
        </ul>
    )
}

export default List
