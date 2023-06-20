import React from 'react'
import { IProps } from './IForm'

import Textarea from '../subcomponents/Textarea/Textarea'
import Buttons from '../subcomponents/Button/Button'

import './Form.scss'

const Form: React.FC<IProps> = (props) => {

    const {
        newTask,
    } = props

    const [value, setValue] = React.useState('')
    const changeValue = (e: string) => {
        setValue(e)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setValue('')
        newTask(value)
    }
    
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2 className='form__title'>Add new task</h2>
            <Textarea text={value} onChahge={changeValue}  /> 
            <Buttons text='Add new task' >
                <Buttons.ButtonText>Add new task</Buttons.ButtonText>
            </Buttons>
        </form>
    )
}

export default Form