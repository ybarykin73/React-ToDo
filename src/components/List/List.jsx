import React from 'react'
import Error from '../Error/Error'
import Listitem from '../ListItem/ListItem'

import './List.scss'

const List = (props) => {

    const {
        list,
        removeTask,
        compliteTask,
        editTask
    } = props

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
