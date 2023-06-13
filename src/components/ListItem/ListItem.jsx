import React from 'react'

import time from '../../Image/time.svg'
import complite from '../../Image/complite.svg'
import edit from '../../Image/edit.svg'
import trash from '../../Image/trash.svg'
import check from '../../Image/check.svg'
import save from '../../Image/save.svg'

import Button from '../subcomponents/Button/Button'
import Textarea from '../subcomponents/Textarea/Textarea'

import "./ListItem.scss"


const ListItem = (props) => {

    const {
        text,
        id,
        isChecked,
        delite,
    } = props

    const [isEdit, setText] = React.useState(true)

    const toggleEdit = () => {
        setText(!isEdit)
    }

    const remove = (id) => {
        delite(id);
    }

    return (
        <li className='list-item'>
            <img 
                className='list-item__status' 
                src={isChecked ? complite : time} 
                alt="complite" 
            />

            <div className='list-item__body'>
                {
                    !isEdit 
                    ?
                    <p className='list-item__text'>
                        {text}
                    </p>
                    : 
                    <Textarea />
                }
            </div>
            <div className='list-item__tollbar'>
                {
                    !isChecked &&
                    <Button image={check} />
                }
                {
                    !isEdit 
                        ? 
                    <Button image={edit} onClick={toggleEdit} />
                        :
                    <Button image={save} onClick={toggleEdit} />
                }
                <Button onClick={() => remove(id)} image={trash} />
            </div>
        </li>
    )
}

export default ListItem