import React from 'react'

import Textarea from '../subcomponents/Textarea/Textarea'
import Button from '../subcomponents/Button/Button'

import './Form.scss'

const Form = () => {
    return (
        <div className='form'>
            <h2 className='form__title'>Add new task</h2>
            <Textarea /> 
            <Button text='Click me!' />
        </div>
    )
}

export default Form