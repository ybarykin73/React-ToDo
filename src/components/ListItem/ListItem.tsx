import React from 'react'
import { IProps } from './IListItem'

import time from '../../Image/time.svg' 
import compliteImage from '../../Image/complite.svg'
import editIamge from '../../Image/edit.svg'
import trash from '../../Image/trash.svg'
import checkImage from '../../Image/check.svg'
import save from '../../Image/save.svg'

import Button from '../subcomponents/Button/Button'
import Textarea from '../subcomponents/Textarea/Textarea'

import "./ListItem.scss"

const ListItem: React.FC<IProps> = (props) => {

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

    const changeValue = (e: string) => {
        setValue(e)
        setText(true)
    }

    const editTask = (id: number, newText: string) => {
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
                    <Button text='check' onClick={() => complite(id)} image={checkImage} />
                }
                {
                    !isEdit
                        ? 
                    <Button text='edit' image={editIamge} onClick={toggleEdit} />
                        :
                    <Button text='save' image={save} onClick={() => editTask(id, value)} />
                }
                <Button text='trash' onClick={() => delite(id)} image={trash} />
            </div>
        </li>
    )
}

export default ListItem