import React from 'react'

import time from '../../Image/time.svg'
import compliteImage from '../../Image/complite.svg'
import editIamge from '../../Image/edit.svg'
import trash from '../../Image/trash.svg'
import checkImage from '../../Image/check.svg'
import save from '../../Image/save.svg'

import Button from '../subcomponents/Button/Button'
import Textarea from '../subcomponents/Textarea/Textarea'

import "./ListItem.scss"

const ListItem = (props) => {

    const {
        text,
        id,
        isChecked,
        complite,
        delite,
        edit
    } = props

    const [isEdit, setText] = React.useState(false)
    const [value, setValue] = React.useState(text)

    const changeValue = (e) => {
        setValue(e)
        setText(true)
    }

    const editTask = (id, newText) => {
        edit(id, newText)
        setText(!isEdit)
    }

    const toggleEdit = () => {
        setText(!isEdit)
    }

    return (
        <li className='list-item'>
            <img 
                className='list-item__status' 
                src={isChecked ? compliteImage : time} 
                alt="complite" 
            />
            <div className='list-item__body'>
                {
                    !isEdit 
                    ?
                    <p className='list-item__text'>
                        {value}
                    </p>
                    : 
                    <Textarea text={value} onChahge={changeValue} />
                }
            </div>
            <div className='list-item__tollbar'>
                {
                    !isChecked &&
                    <Button onClick={() => complite(id)} image={checkImage} />
                }
                {
                    !isEdit 
                        ? 
                    <Button image={editIamge} onClick={toggleEdit} />
                        :
                    <Button image={save} onClick={() => editTask(id, value)} />
                }
                <Button onClick={() => delite(id)} image={trash} />
            </div>
        </li>
    )
}

export default ListItem