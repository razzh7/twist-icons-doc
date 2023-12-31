import type { IconGridProps } from "../../types"
import './index.less'

function IconGroup(props: IconGridProps) {
  const { name, Icon, onClick } = props
  return (
    <div className='icon-grid'>
      <div className="icon" onClick={onClick}>
        <Icon size={28}/>
      </div>
      <div className="icon-name">{name}</div>
    </div>
  )
}

export default IconGroup