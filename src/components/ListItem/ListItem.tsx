import React from 'react'
import { IProps } from './IListItem'

import Button from '../subcomponents/Button/Button'
import Textarea from '../subcomponents/Textarea/Textarea'
import Icon from '../subcomponents/Icon/Icon'

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
            <div className='list-item__status'>
                <Icon 
                    iconId={isChecked ? 'complite' : 'time'} 
                    size={40}
                />
            </div>
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
                    <Button 
                        text='check' 
                        onClick={() => complite(id)} 
                        iconName='check' 
                    />
                }
                {
                    !isEdit
                        ? 
                    <Button text='edit' iconName='edit' onClick={toggleEdit} />
                        :
                    <Button text='save' iconName='save' onClick={() => editTask(id, value)} />
                }
                <Button 
                    text='trash' 
                    onClick={() => delite(id)} 
                    iconName='trash'
                 />
            </div>
        </li>
    )
}

export default ListItem