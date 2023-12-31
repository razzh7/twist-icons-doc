import { Card, Space, Button } from "@arco-design/web-react"
import { useTranslation } from 'react-i18next'
import useActions from "@/hooks/useActions"
import CodeTabs from '../CodeTabs'
import type { IconDefinition } from '../../types'
import './index.less'

export type PreviewIconProps = {
  iconName: string
  iconActions: IconDefinition | null
  id: string
}
function IconActions (props: PreviewIconProps) {
  const { iconName, iconActions, id } = props
  const { t } = useTranslation()
  const {
    copyName,
    copySVG,
    copyComponentCode,
    downloadSVG,
    downloadPNG
  } = useActions()

  return (
    <div>
      <div className='icon-preview'>
        <Card>
          {iconActions}
        </Card>
      </div>
      <Space direction='vertical' style={{ width: '100%' }}>
        <CodeTabs iconName={iconName} id={id as string} />
        <div className='preview-text'>{t('copy.snippets')}</div>
        <Space>
          <Button onClick={() => copyName(iconName)}>{t('copy.name', { name: iconName })}</Button>
          <Button onClick={() => copySVG(iconActions as IconDefinition)}>{t('copy.svg')}</Button>
          <Button onClick={() => copyComponentCode(iconName)}>{t('copy.code.react')}</Button>
          <Button onClick={() => copyComponentCode(iconName)}>{t('copy.code.vue')}</Button>
        </Space>
        <div className='preview-text'>{t('download')}</div>
        <Space>
          <Button onClick={() => downloadSVG(iconName, iconActions as IconDefinition)}>{t('download.svg')}</Button>
          <Button onClick={() => downloadPNG(iconName, iconActions as IconDefinition)}>{t('download.png')}</Button>
          {/* <Button>{t('download.batch.join')}</Button> */}
        </Space>
      </Space>
    </div>
  )
}

export default IconActions

