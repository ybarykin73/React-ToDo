import React from 'react'

import Textarea from '../subcomponents/Textarea/Textarea'
import Button from '../subcomponents/Button/Button'

import { useDispatchTodoList } from '../../context/TodoContext'

import { IProps } from './IForm'
import './Form.scss'

let idTask = 6

const Form: React.FC<IProps> = () => {

    const [value, setValue] = React.useState('')

    const changeValue = (e: string) => {
        setValue(e)
    }

    const dispatch = useDispatchTodoList()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setValue('')
        dispatch({
            type: 'added',
            id: idTask++,
            text: value
        })
    }
    
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2 className='form__title'>Add new task</h2>
            <Textarea text={value} onChahge={changeValue}  /> 
            <Button 
                style='primary' 
                ariaLabel='Add new task'
            >
                Add new task
            </Button>
        </form>
    )
}

export default Form