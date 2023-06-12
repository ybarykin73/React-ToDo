import React from 'react'
import Listitem from '../ListItem/ListItem'

import './List.scss'

const array = [{
    id: 1,
    isChecked: false,
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum consequuntur quas magnam adipisci. Culpa, earum fugiat sequi aspernatur molestias iure eligendi ea sint quam, aliquam est. Vel, exercitationem molestias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum consequuntur quas magnam adipisci. Culpa, earum fugiat sequi aspernatur molestias iure eligendi ea sint quam, aliquam est. Vel, exercitationem molestias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum consequuntur quas magnam adipisci. Culpa, earum fugiat sequi aspernatur molestias iure eligendi ea sint quam, aliquam est. Vel, exercitationem molestias?'
}, {
    id: 2,
    isChecked: true,
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rerum consequuntur quas magnam adipisci. Culpa, earum fugiat sequi aspernatur molestias iure eligendi ea sint quam, aliquam est. Vel, exercitationem molestias?'
},3,4,5]

const List = () => {

    const [list, setList] = React.useState(array)

    const test = () => {
        setList(current => [...current, ...'1'])
        console.log(list);
    }

    console.log(list);

    return (
        <>
        <ul>
            {
                list.map((item) => (
                    <Listitem 
                        key={item.id}
                        id={item.id}
                        isChecked={item.isChecked}
                        text={item.text}
                    />
                ))
            }
        </ul>
        <button onClick={() => test()} >delite</button>
        </>
    )
}

export default List
