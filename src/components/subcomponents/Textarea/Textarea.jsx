import React from 'react'

import './Textarea.scss'

const Textarea = (props) => {
    const {
        text,
        onChahge
    } = props

    const [value, setValue] = React.useState(text)

    const changeValue = (e) => {
        setValue(e.target.value)
        onChahge(e.target.value)
    }

    return (
        <textarea 
            className='textarea' 
            value={value} 
            onChange={(e) => changeValue(e)}
        />
    )
}

export default Textarea