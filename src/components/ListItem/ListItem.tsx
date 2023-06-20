import React from 'react'
import { IProps } from './IListItem'

import Buttons from '../subcomponents/Button/Button'
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
                    <Buttons text='check' onClick={() => complite(id)} >
                        <Buttons.ButtonImage iconName='check' />
                    </Buttons>
                }
                {
                    !isEdit
                        ? 
                    <Buttons text='edit' onClick={toggleEdit} >
                        <Buttons.ButtonImage iconName='edit' />
                    </Buttons>
                        :
                    <Buttons text='save' onClick={() => editTask(id, value)} >
                        <Buttons.ButtonImage iconName='save' />
                    </Buttons>
                }
                <Buttons text='trash' onClick={() => delite(id)} >
                    <Buttons.ButtonImage iconName='trash' />
                </Buttons>
            </div>
        </li>
    )
}

export default ListItem