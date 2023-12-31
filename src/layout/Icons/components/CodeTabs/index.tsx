import { Tabs } from '@arco-design/web-react'
import Snippet from '@/components/Snippet'
import CodeBlock from '@/components/CodeBlock'

export type IconCodeTabsProps = {
  iconName: string
  id: string
}

const { TabPane } = Tabs
function IconCodeTabs({ iconName, id }: IconCodeTabsProps) {
  return (
    <Tabs defaultActiveTab='react' lazyload>
      <TabPane
        key='react'
        title='React'
      >
        <Snippet style={{ overflowX: 'auto' }}>
          <CodeBlock code={`import { ${iconName} } from '@twist-space/react-icons/${id}'`} language='javascript' />
        </Snippet>
      </TabPane>
      <TabPane
        key='vue3'
        title='Vue3'
      >
        <Snippet style={{ overflowX: 'auto' }}>
          <CodeBlock code={`import { ${iconName} } from '@twist-space/vue3-icons/${id}'`} language='javascript' />
        </Snippet>
      </TabPane>
      <TabPane
        key='vue2'
        title='Vue2'
      >
        <Snippet style={{ overflowX: 'auto' }}>
          <CodeBlock code={`import { ${iconName} } from '@twist-space/vue2-icons/${id}'`} language='javascript' />
        </Snippet>
      </TabPane>
    </Tabs>
  )
}

export default IconCodeTabs
