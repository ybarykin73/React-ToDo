import { IItem } from "../components/List/IList"

type IAction = {
  type: string,
  id: number,
  text: string,
  isChecked: boolean
}

export default function todoReducer(list: IItem[], action: IAction) {
  switch (action.type) {
    case 'added': {
      return [...list, {
        id: action.id,
        text: action.text,
        isChecked: false
      }]
    }

    case 'remove': {
      return list.filter(item => item.id !== action.id)
    }

    case 'complite': {
      return list.map(item => item.id === action.id ? {...item, isChecked: true} : {...item})
    }

    case 'edit': {
      return list.map(item => item.id === action.id ? {...item, text: action.text} : {...item})
    }

    default : {
      throw Error('Неизвестный экшен: ' + action.type)
    }
  }
}