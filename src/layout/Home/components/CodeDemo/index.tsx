import React from 'react'
import { Tabs } from '@arco-design/web-react'

export interface BaseDemo {
  wrapStyle: React.CSSProperties
  frameStyle: React.CSSProperties
}
export interface DemoType extends BaseDemo {
  key: string
  src: string
}

const { TabPane } = Tabs
function CodeDemo() {
  const baseDemo: BaseDemo = {
    wrapStyle: { padding: 20, borderRadius: 4, backgroundColor: 'var(--color-neutral-2)' },
    frameStyle: { width: '100%', height: 500, border: 0, borderRadius: 4, overflow: 'hidden' }
  }
  const demoCollection: DemoType[] = [
    {
      key: 'React-playground',
      src: 'https://stackblitz.com/edit/vitejs-vite-ewd62r?embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1&theme=dark&terminalHeight=30&ctl=1',
      ...baseDemo
    },
    {
      key: 'Vue3-playground',
      src: 'https://stackblitz.com/edit/vitejs-vite-zdrkec?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&theme=dark&terminalHeight=30',
      ...baseDemo
    },
    {
      key: 'Vue2-playground',
      src: 'https://stackblitz.com/edit/vite-vue2-wjkj4-rkkun1?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&theme=dark&terminalHeight=30',
      ...baseDemo
    }
  ]

  return (
    <Tabs defaultActiveTab={demoCollection[0].key} lazyload>
      {demoCollection.map(demo => (
        <TabPane key={demo.key} title={demo.key}>
          <div style={demo.wrapStyle}>
            <iframe
              src={demo.src}
              style={demo.frameStyle}
            >
            </iframe>
          </div>
        </TabPane>
      ))}
    </Tabs>
  )
}

export default CodeDemo
