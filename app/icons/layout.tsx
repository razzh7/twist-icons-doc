'use client'
import { IconSider } from '@/components/icon-sider'


interface IconsLayoutProps {
  children: React.ReactNode
}

export default function IconsLayout({ children }: IconsLayoutProps) {

  return (
    <div className='flex overflow-hidden h-screen'>
      <IconSider />
      {children}
    </div>
  )
}