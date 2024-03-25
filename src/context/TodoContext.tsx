import React, { createContext, useContext, ReactNode } from "react"

import todoReducer from "./todoReducer"

import { IItem } from "../components/List/IList"

const TodoContext = createContext<IItem[]>([])
const TodoDispatchContext = createContext<any>(undefined)

interface IProps {
  children: ReactNode
}

const TodoProvider: React.FC<IProps> = ({children}) => {

  const [todoList, dispatch] = React.useReducer(todoReducer, array)

  return (
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

const array = [{
  id: 0,
  isChecked: true,
  text: 'Переписать лист на useReducer и useContext'
}, {
  id: 1,
  isChecked: true,
  text: 'Исправить работу типов'
},{
  id: 2,
  isChecked: true,
  text: 'Переделать дизайн, использовать стили неоморфизм'
},{
  id: 3,
  isChecked: true,
  text: 'Добавить работу localStorage'
},{
  id: 4,
  isChecked: false,
  text: 'Исправить добавление id для новых задач'
},{
  id: 5,
  isChecked: true,
  text: 'Реализовать смену темы'
}]

export default TodoProvider