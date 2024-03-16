import React from 'react'

import Icon from '../subcomponents/Icon/Icon'
import Buttons from '../subcomponents/Button/Button'
import Textarea from '../subcomponents/Textarea/Textarea'

import { useDispatchTodoList } from '../../context/TodoContext'

import { IProps } from './IListItem'
import "./ListItem.scss"

const ListItem: React.FC<IProps> = (props) => {

    const {
        text,
        id,
        isChecked,
    } = props

    const [isEdit, setIsEdit] = React.useState(false)
    const [value, setValue] = React.useState(text)

    const dispatch = useDispatchTodoList()

    const changeValue = (e: string) => {
        setValue(e)
        setIsEdit(true)
    }

    const toggleEdit = () => {
        setIsEdit(!isEdit)
    }

    const removeTask = (idTask: number) => {
        dispatch({
            type: 'remove',
            id: idTask
        })
    }

    const compliteTask = (idTask: number) => {
        dispatch({
            type: 'complite',
            id: idTask
        })
    }

    const editTask = (idTask: number, newText: string) => {
        dispatch({
            type: 'edit',
            id: idTask,
            text: newText
        })
        setIsEdit(!isEdit)
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
                    <Buttons text='check' onClick={() => compliteTask(id)} >
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
                <Buttons text='trash' onClick={() => removeTask(id)} >
                    <Buttons.ButtonImage iconName='trash' />
                </Buttons>
            </div>
        </li>
    )
}

export default ListItem