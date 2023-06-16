export interface IItem {
    id: number,
    text: string,
    isChecked: boolean
}

export interface IProps {
    list: IItem[],
    removeTask: (id: number) => void,
    compliteTask: (id: number) => void,
    editTask: (id: number, text: string) => void
}