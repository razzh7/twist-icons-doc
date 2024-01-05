import { useState } from 'react'
import { TiSearch, TiGridView } from '@twist-space/react-icons/ti'
import { AiGroupOutlined } from '@twist-space/react-icons/ai'
import { Button, Grid, Input, Space } from '@arco-design/web-react'
import { useSearch, useTitle } from '@/hooks'
import Icons from './components/Icons'
import { IconCommonProps } from '@/common'
import type { ListType } from './components/Icons'

function SiteIconDisplay() {
  const { currentId, iconValue, searchValue, handleChange } = useSearch()
  const [listType, setListType] = useState<ListType>('small')
  const handleGroupList = (type: ListType) => {
    setListType(type)
  }
  useTitle(`Twist Icons preview for ${currentId}`)

  return (
    <div>
      <Grid.Row style={{ margin: '15px 0' }}>
        <Grid.Col span={24} offset={1}>
          <Space>
            <Input
              value={searchValue}
              onChange={handleChange}
              allowClear
              placeholder='Sreach icons...'
              style={{ width: 500 }}
              height={42}
              prefix={<TiSearch {...IconCommonProps} />} />
            <div>
              <Button
                type='text'
                shape='circle'
                onClick={() => handleGroupList('small')}
              >
                <TiGridView {...IconCommonProps} />
              </Button>
              <Button
                type='text'
                shape='circle'
                onClick={() => handleGroupList('list')}
              >
                <AiGroupOutlined {...IconCommonProps} />
              </Button>
            </div>
          </Space>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col span={24}>
          <Icons IconSet={iconValue} type={listType} />
        </Grid.Col>
      </Grid.Row>
    </div>
  )
}

export default SiteIconDisplay