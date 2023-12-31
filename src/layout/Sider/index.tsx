import { useNavigate, useParams } from "react-router-dom"
import { Menu } from "@arco-design/web-react"
import { useEffect, useState } from "react"
import IconMenuItem from "./category"
import './index.less'

function IconSider() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['home'])
  const onClickMenuItem = (key: string) => {
    if (key === 'home') {
      navigate('/')
      return
    }
    navigate(`/icons/${key}`)
  }

  useEffect(() => {
    setSelectedKeys(id ? [id] : ['home'])
  }, [id])

  return (
    <div className="icon-sider">
      <Menu
        defaultSelectedKeys={['home']}
        selectedKeys={selectedKeys}
        onClickMenuItem={onClickMenuItem}
      >
        {
          IconMenuItem.map(({ key, name }) => (
            <Menu.Item key={key}>{name}</Menu.Item>
          ))
        }
      </Menu>
    </div>

  )
}

export default IconSider