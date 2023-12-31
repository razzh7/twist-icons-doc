import type { IconThumnail } from '../../types'
import './index.less'

function IconThumnail({ Icon, onClick }: IconThumnail) {
  return (
    <span className="icon-thumnail" onClick={onClick}>
      <Icon size={20} />
    </span>
  )
}

export default IconThumnail