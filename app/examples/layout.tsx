'use client'
import { Nav } from "@/components/nav"

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}