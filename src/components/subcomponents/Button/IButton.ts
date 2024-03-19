export interface IProps {
    ariaLabel: string
    onClick?: () => void,
    style: 'icon' | 'primary'
    children: React.ReactNode
}