import SiteHeader from '../Header'
import SiteSider from '../Sider'
import { Layout } from '@arco-design/web-react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@/components/ThemeProvider'

const { Header, Sider, Content } = Layout
function Main() {
  return (
    <ThemeProvider>
      <Layout>
        <Header>
          <SiteHeader />
        </Header>
        <Layout>
          <Sider>
            <SiteSider />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  )
}

export default Main