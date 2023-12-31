import { Table, TableColumnProps } from '@arco-design/web-react'
import { useI18n } from '@/hooks'

function IconApi() {
  const { t } = useI18n()

  const columns: TableColumnProps[] = [
    {
      title: t('api.props'),
      dataIndex: 'props'
    },
    {
      title: t('api.type'),
      dataIndex: 'type'
    },
    {
      title: t('api.default'),
      dataIndex: 'default'
    },
    {
      title: t('api.description'),
      dataIndex: 'description'
    }
  ]
  const data = [
    {
      key: '1',
      props: 'size',
      type: 'number',
      default: '-',
      description: t('api.size.description')
    },
    {
      key: '2',
      props: 'color',
      type: 'string',
      default: '-',
      description: t('api.color.description')
    },
    {
      key: '3',
      props: 'style',
      type: 'CSSProperties',
      default: '-',
      description: t('api.style.description')
    },
    {
      key: '4',
      props: 'className',
      type: 'string',
      default: '-',
      description: t('api.rclass.description')
    },
    {
      key: '5',
      props: 'class',
      type: 'string',
      default: '-',
      description: t('api.vclass.description')
    },
    {
      key: '6',
      props: 'attrs',
      type: 'SVGAttributes',
      default: '-',
      description: t('api.attrs.description')
    }
  ]

  return (
    <Table
      columns={columns}
      data={data}
      pagination={false}
      stripe={true}
      borderCell={true}
    />
  )
}

export default IconApi