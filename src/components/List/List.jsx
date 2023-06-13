import React from 'react'
import Error from '../Error/Error'
import Listitem from '../ListItem/ListItem'

import './List.scss'

const List = (props) => {

    const {
        list
    } = props

    const [array, setList] = React.useState(list)

    const test = () => {
        setList(current => [...current, ...'1'])
        console.log(array);
    }

    const remoeTask = (task) => {
        setList((current) => 
            current.filter((item) => item.id !== task)
        )
    }

    if (!array.length) {
        return (
            <Error />
        )
    }

    return (
        <>
        <ul>
            {
                array.map((item) => (
                    <Listitem 
                        key={item.id}
                        id={item.id}
                        isChecked={item.isChecked}
                        text={item.text}
                        delite={(e) => remoeTask(e)}
                    />
                ))
            }
        </ul>
        <button onClick={() => remoeTask(2)}>123 2</button>

        </>
    )
}

export default List
