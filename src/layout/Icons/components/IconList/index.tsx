import { IconType } from '@twist-space/react-icons'
import IconGrid from '../IconGrid'
import IconThumbnail from '../IconThumnail'
import type { IconSet } from '../Icons'
import './index.less'

export type IconListProps = {
  IconSet: IconSet[]
  type: 'small' | 'list'
  IconClick: (prefix: string, name: string, Icon: IconType) => void
}

function IconList(props: IconListProps) {
  const { IconSet, type, IconClick } = props
  return (
    <div className='icon-list-wrapper'>
      <div className='icon-list'>
        {
          IconSet.map(({ prefix, name, Icon }) => (
            type === 'small'
              ? ((<IconThumbnail Icon={Icon} key={name} onClick={() => IconClick(prefix, name, Icon)} />))
              : (<IconGrid name={`${prefix} ${name}`} Icon={Icon} key={name} onClick={() => IconClick(prefix, name, Icon)} />)
          ))
        }
      </div>
    </div>
  )
}

export default IconList