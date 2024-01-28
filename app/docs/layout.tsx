'use client'
import { Nav } from '@/components/nav'


interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {

  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}