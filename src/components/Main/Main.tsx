import React from 'react'

import List from '../List/List'
import Form from '../Form/Form'

import './Main.scss'

const array = [{
    id: 1,
    isChecked: false,
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum consequuntur quas magnam adipisci. Culpa, earum fugiat sequi aspernatur molestias iure eligendi ea sint quam, aliquam est. Vel, exercitationem molestias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum consequuntur quas magnam adipisci. Culpa, earum fugiat sequi aspernatur molestias iure eligendi ea sint quam, aliquam est. Vel, exercitationem molestias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum consequuntur quas magnam adipisci. Culpa, earum fugiat sequi aspernatur molestias iure eligendi ea sint quam, aliquam est. Vel, exercitationem molestias?'
}, {
    id: 2,
    isChecked: true,
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum consequuntur quas magnam adipisci. Culpa, earum fugiat sequi aspernatur molestias iure eligendi ea sint quam, aliquam est. Vel, exercitationem molestias?'
}]

const Main = () => {

    const [list, setList] = React.useState(array)

    const addTask = (task: string) => {
        const newTask =[
        ...list,
        {
            id: Math.floor(Math.random() * 100),
            text: task,
            isChecked: false,
        }]
        setList(newTask)
    }

    const removeTask = (id: number) => {
        setList(current => current.filter(item => item.id !== id))
    }

    const editTask = (idTask: number, newText :string) => {
        setList([
            ...list.map((item) => 
                item.id === idTask ? { ...item, text: newText} : {...item}
            )
        ])
    }

    const compliteTask = (idTask: number) => {
        setList([
            ...list.map((item) => 
                item.id === idTask ? { ...item, isChecked: true} : {...item}
            )
        ])
    }

    return (
        <main className='main'>
            <h1 className='title'>TODO list</h1>
            <List 
                removeTask={removeTask}
                compliteTask={compliteTask}
                editTask={editTask}
                list={list} 
            /> 
            <Form 
                newTask={addTask}
            />
        </main>
    )
}

export default Main