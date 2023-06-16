import React from 'react'
import { IProps } from './ITextarea'

import './Textarea.scss'

const Textarea: React.FC<IProps> = (props) => {
    const {
        text,
        onChahge
    } = props

    const [value, setValue] = React.useState(text)

    React.useEffect(() => {
        setValue(text)
    }, [text])

    const changeValue = (e: React.ChangeEvent<{value: string}>) => {
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