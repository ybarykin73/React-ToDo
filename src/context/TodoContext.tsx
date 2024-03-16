import React, { createContext, useContext } from "react"

import { IItem } from "../components/List/IList"

const TodoContext = createContext<IItem[]>([])
const TodoDispatchContext = createContext<any>(undefined)

//@ts-ignore
const TodoProvider = ({children}) => {

  //@ts-ignore
  const [todoList, dispatch] = React.useReducer(todoReducer, array)

  return (
    //@ts-ignore
    <TodoContext.Provider value={todoList}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export function useTodoList() {
  return useContext(TodoContext)
}

export function useDispatchTodoList() {
  return useContext(TodoDispatchContext)
}

export const todoReducer = (list: any, action: any) => {
  switch (action.type) {
    case 'added': {
      return [...list, {
        id: action.id,
        text: action.text,
        isChecked: false
      }]
    }

    case 'remove': {
      //@ts-ignore
      return list.filter(item => item.id !== action.id)
    }

    case 'complite': {
      //@ts-ignore
      return list.map(item => item.id === action.id ? {...item, isChecked: true} : {...item})
    }

    case 'edit': {
      //@ts-ignore
      return list.map(item => item.id === action.id ? {...item, text: action.text} : {...item})
    }

    default : {
      throw Error('Неизвестный экшен: ' + action.type)
    }
  }
}

const array = [{
  id: 0,
  isChecked: true,
  text: 'Переписать лист на useReducer и useContext'
}, {
  id: 1,
  isChecked: false,
  text: 'Исправить работу типов'
},{
  id: 2,
  isChecked: false,
  text: 'Переделать дизайн'
},{
  id: 3,
  isChecked: false,
  text: 'Добавить работу localStorage'
},{
  id: 4,
  isChecked: false,
  text: 'Исправить добавление id для новых задач'
}]

export default TodoProvider