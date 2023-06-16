export interface IProps {
    text: string,
    id: number,
    isChecked: boolean,
    complite: (id: number) => void,
    delite: (id: number) => void,
    edit: (id: number, newTask: string) => void,
}