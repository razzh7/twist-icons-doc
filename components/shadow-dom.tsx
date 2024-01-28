import { useState, useRef, useEffect, Fragment, ReactNode } from "react"
import { createPortal } from 'react-dom'
import { cn } from "@/lib/utils"

interface ShadowDomProps {
  className?: string
  children: ReactNode
}

export function ShadowDom({ className, children }: ShadowDomProps) {
  const node = useRef<HTMLDivElement>(null)
  const [rootNode, setRootNode] = useState<ShadowRoot | null>(null)

  useEffect(() => {
    if (!node.current?.shadowRoot) {
      const root = node.current?.attachShadow({ mode: 'open' })
      root && setRootNode(root)
    }
  }, [])

  return (
    <Fragment>
      <div ref={node} className={cn(className)} />
      {rootNode && createPortal(children, rootNode)}
    </Fragment>
  )
}