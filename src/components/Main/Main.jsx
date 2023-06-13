import React from 'react'

import List from '../List/List'
import Form from '../Form/Form'

import './Main.scss'

const Main = () => {
    return (
        <main className='main'>
            <h1 className='title'>TODO list</h1>
            <List /> 
            <Form />
        </main>
    )
}

export default Main