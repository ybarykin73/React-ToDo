import React, { memo } from 'react'

import Button from '../subcomponents/Button/Button'
import Textarea from '../subcomponents/Textarea/Textarea'
import Icon from '../subcomponents/Icon/Icon'

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
                {
                    isChecked && <Icon iconId='complite' size={16} />
                }
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
                    !isChecked 
                        ? 
                        <>
                            <Button
                                style='icon'
                                ariaLabel='check'
                                onClick={() => compliteTask(id)}
                            >
                                <Icon iconId='check' size={26} />
                            </Button> 
                            {
                                !isEdit 
                                ?                    
                                <Button 
                                        style='icon'
                                        ariaLabel='edit'
                                        onClick={toggleEdit}
                                    >
                                    <Icon iconId='edit' size={26} />
                                </Button> 
                                : 
                                <Button
                                    style='icon'
                                    ariaLabel='save'
                                    onClick={() => editTask(id, value)}
                                >
                                    <Icon iconId='save' size={26} />
                                </Button>
                            }
                        </> 
                        :
                        null
                }
                <Button
                    style='icon'
                    ariaLabel='trash'
                    onClick={() => removeTask(id)}
                >
                    <Icon iconId='trash' size={26} />
                </Button>
            </div>
        </li>
    )
}

export default memo(ListItem)