'use client'
import Link from 'next/link'

interface LogoProps {
  className?: string
  size?: number
}
export function Logo({ className, size }: LogoProps) {
  return (
    <Link href='/' className={className}>
      <span className="font-mono font-semibold text-lg">Twist</span>
    </Link>
  )
}