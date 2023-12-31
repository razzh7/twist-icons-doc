import React, { useState, useMemo, FC } from 'react'
import { Button } from '@arco-design/web-react'
import { TiFileCopy, TiCheckCircle } from '@twist-space/react-icons/ti'
import copy from 'copy-to-clipboard'
import type { CodeBlockProps } from '../CodeBlock'
import './snippet.less'

export type SnippetProps = {
  children: React.ReactNode
  style?: React.CSSProperties
}

let timer: number
const Snippet: FC<SnippetProps> = ({ children, style }) => {
  const [code, setCode] = useState<string>('')
  const [copyStatus, setCopyStatus] = useState<boolean>(false)
  const preContent = useMemo(() => {
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const childProps = child.props as CodeBlockProps
        setCode(childProps.code)
      }
    })

    return (
      <pre className='snippet-pre'>
        {children}
      </pre>
    )
  }, [children])

  const handleCopy = async () => {
    setCopyStatus(true)
    await copy(code)

    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      setCopyStatus(false)
    }, 2000)
  }

  const copyButton = copyStatus
    ? (
      <Button
        shape='circle'
        type='text'
        icon={<TiCheckCircle size={16} color='#4b774c' />}
      />
    )
    : (
      <Button
        shape='circle'
        type='text'
        onClick={handleCopy}
        icon={<TiFileCopy size={16} color='var(--color-fill-4)' />}
      />
    )

  return (
    <div className='snippet' style={style}>
      {preContent}
      {copyButton}
    </div>
  )
}

export default Snippet