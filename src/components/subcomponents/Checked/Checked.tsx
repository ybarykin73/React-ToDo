import { memo } from 'react'

import Icon from '../Icon/Icon'

import { IProps } from './IChecked'
import './Checked.scss'

const Checked: React.FC<IProps> = ({checked}) => {
  return (
    <div className="checked">
      {
        checked && <Icon iconId='complite' size={16} />
      }
    </div>
  )
}

export default memo(Checked)