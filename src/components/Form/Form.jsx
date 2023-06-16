import React from 'react'

import Textarea from '../subcomponents/Textarea/Textarea'
import Button from '../subcomponents/Button/Button'

import './Form.scss'

const Form = (props) => {

    const {
        newTask,
    } = props

    const [value, setValue] = React.useState('')
    const changeValue = (e) => {
        setValue(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        newTask(value)
        setValue('wa dwa')
    }
    
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2 className='form__title'>Add new task</h2>
            <Textarea text={value} onChahge={changeValue}  /> 
            <Button text='Click me!' />
        </form>
    )
}

export default Form