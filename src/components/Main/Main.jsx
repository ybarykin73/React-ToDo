import React from 'react'

import List from '../List/List'
import Form from '../Form/Form'

import './Main.scss'

const array = [{
    id: 1,
    isChecked: false,
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum consequuntur quas magnam adipisci. Culpa, earum fugiat sequi aspernatur molestias iure eligendi ea sint quam, aliquam est. Vel, exercitationem molestias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum consequuntur quas magnam adipisci. Culpa, earum fugiat sequi aspernatur molestias iure eligendi ea sint quam, aliquam est. Vel, exercitationem molestias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum consequuntur quas magnam adipisci. Culpa, earum fugiat sequi aspernatur molestias iure eligendi ea sint quam, aliquam est. Vel, exercitationem molestias?'
}, {
    id: 2,
    isChecked: true,
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum consequuntur quas magnam adipisci. Culpa, earum fugiat sequi aspernatur molestias iure eligendi ea sint quam, aliquam est. Vel, exercitationem molestias?'
}]

const Main = () => {
    return (
        <main className='main'>
            <h1 className='title'>TODO list</h1>
            <List list={array} /> 
            <Form />
        </main>
    )
}

export default Main