import type { ReactElement, JSXElementConstructor } from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export type IconMenuItem = {
  key: string
  name: string
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCategory() {
  const IconMenuItem: IconMenuItem[] = [
    {
      key: 'home',
      name: 'Installation'
    },
    {
      key: 'all',
      name: 'All Icons'
    },
    {
      key: 'ai',
      name: 'Ant Design Icons'
    },
    {
      key: 'ti',
      name: 'TDesign Icons'
    }
  ]

  return IconMenuItem
}

export const download = (downfile: File) => {
  const link = document.createElement('a')
  const objectUrl = URL.createObjectURL(downfile)

  link.href = objectUrl
  link.download = downfile.name
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  URL.revokeObjectURL(objectUrl)
}

export const downloadDataURL = (dataURL: string, filename: string) => {
  const link = document.createElement('a')
  link.href = dataURL
  link.download = filename
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
}

// https://github.com/vercel/next.js/issues/57771
export async function renderToString(
  element: ReactElement<any, string | JSXElementConstructor<any>>,
): Promise<string> {
  const { renderToReadableStream } = await import('react-dom/server')

  const stream = await renderToReadableStream(element)
  const textStream = stream.pipeThrough(new TextDecoderStream())
  const reader = textStream.getReader()

  let result = ''
  while (true) {
    const { value, done } = await reader.read()
    if (done) break
    result += value
  }
  return result
}