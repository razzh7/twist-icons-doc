import { PageHeader, Dropdown, Menu, Button, Space } from '@arco-design/web-react'
import { TiLogoGithubFilled, TiModeDark, TiSunny, TiDesktop, TiTranslate1 } from '@twist-space/react-icons/ti'
import { useTheme } from '@/hooks/useTheme'
import { useI18n, type language } from '@/hooks/useI18n'
import { ThemeMode } from '@/components/ThemeProvider'
import { IconCommonProps } from '@/common'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DarkLogo from '@/static/twist-icons-dark.svg?react'
import LightLogo from '@/static/twist-icons-light.svg?react'
import './index.less'

export default function Header() {
  const { t, changeLanguage } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()


  useEffect(() => {
    toggleTheme(theme)
  }, [theme, toggleTheme])

  const ThemeDropList = (
    <Menu
      onClickMenuItem={(key) => toggleTheme(key as ThemeMode)}
    >
      <Menu.Item key='light'>{t('light')}</Menu.Item>
      <Menu.Item key='dark'>{t('dark')}</Menu.Item>
      <Menu.Item key='system'>{t('system')}</Menu.Item>
    </Menu>
  )
  const ThemeIcon = () => {
    switch (theme) {
    case 'light':
      return <TiSunny {...IconCommonProps} />
    case 'dark':
      return <TiModeDark {...IconCommonProps} />
    default:
      return <TiDesktop {...IconCommonProps} />
    }
  }
  const TranslationDropList = (
    <Menu
      onClickMenuItem={(key) => changeLanguage(key as language)}
    >
      <Menu.Item key='en'>{t('English')}</Menu.Item>
      <Menu.Item key='zh'>{t('Chinese')}</Menu.Item>
    </Menu>
  )
  const Logo = (
    theme === 'light' ? <LightLogo /> : <DarkLogo />
  )

  const Title = (
    <div className='twist-title' onClick={() => navigate('/')}>
      {/* <img src={theme === 'light' ? lightLogo : darkLogo} alt="Twist-Icons" /> */}
      {Logo}
    </div>
  )

  return (
    <PageHeader
      className='header'
      title={Title}
      subTitle='high-quality SVG icon libraries'
      extra={
        <Space size='mini'>
          <Dropdown droplist={ThemeDropList}>
            <Button
              type='text'
              shape='circle'
              icon={<ThemeIcon />}
            />
          </Dropdown>
          <Dropdown droplist={TranslationDropList}>
            <Button
              type='text'
              shape='circle'
              icon={<TiTranslate1 {...IconCommonProps} />}
            />
          </Dropdown>
          <Button
            type='text'
            shape='circle'
          >
            <a
              href='https://github.com/twist-space/twist-icons'
              target='_blank' rel="noreferrer"
            >
              <TiLogoGithubFilled {...IconCommonProps} />
            </a>
          </Button>
        </Space>
      }
    />
  )
}