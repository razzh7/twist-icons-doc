import { useState } from 'react'
import { Modal } from '@arco-design/web-react'
import IconList from '../IconList'
import IconActions from '../IconActions'
import { IconType } from '@twist-space/react-icons'
import type { IconDefinition } from '../../types'
import './index.less'

export type IconSet = {
  prefix: string
  name: string
  Icon: IconType
}
export type ListType = 'small' | 'list'
export type IconsProps = {
  IconSet: IconSet[]
  type: ListType
}

function IconDisplay({ IconSet, type }: IconsProps) {
  const [visible, setVisible] = useState(false)
  const [iconName, setIconName] = useState('')
  const [prefixId, setPrefixId] = useState('')
  const [iconActions, setActionsIcon] = useState<IconDefinition | null>(null)

  const IconClick = (prefix: string, name: string, Icon: IconType) => {
    setPrefixId(prefix)
    setIconName(name)
    setActionsIcon(<Icon size={128} color='var(--color-text-1)' />)
    setVisible(true)
  }

  return (
    <div>
      <IconList IconSet={IconSet} type={type} IconClick={IconClick} />
      <Modal
        title={`${prefixId}/${iconName}`}
        visible={visible}
        style={{ width: '45%' }}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
        footer={null}
      >
        <IconActions iconName={iconName} iconActions={iconActions} id={prefixId} />
      </Modal>
    </div>
  )
}

export default IconDisplay