import { useToast } from "@/components/ui/use-toast"
import copy from 'copy-to-clipboard'
import { Canvg, type RenderingContext2D } from 'canvg'
import { download, downloadDataURL, renderToString } from '@/lib/utils'
import type { ReactElement } from "react"
import type { IconType } from '@twist-space/react-icons'

export function useActions() {
  const { toast } = useToast()
  const copyName = async (name: string) => {
    await copy(name)
    toast({
      title: `Copied ${name}`
    })
  }

  const getSVG = async (svgComponent: ReactElement<IconType>) => {
    const html = await renderToString(svgComponent)
    return '<?xml version="1.0" encoding="UTF-8"?>\n' + html
  }

  const copySVG = async (svgComponent: ReactElement<IconType>) => {
    const svg = await getSVG(svgComponent)
    await copy(svg)
    toast({
      title: `Copied SVG Success`
    })
  }

  const copyComponentCode = async (name: string) => {
    await copy(`<${name} />`)
    toast({
      title: `Copied ${name} Success`
    })
  }

  const downloadSVG = async (name: string, svgComponent: ReactElement<IconType>) => {
    const svg = await getSVG(svgComponent)
    const file = new File([svg], `${name}.svg`, {
      type: 'image/svg'
    })
    download(file)
  }

  const downloadPNG = async (name: string, svgComponent: ReactElement<IconType>) => {
    const svg = await getSVG(svgComponent)
    // create canvas
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    const cs = document.querySelector('canvas')!
    // render svg on canvas
    const ctx = cs.getContext('2d')
    const v = await Canvg.fromString(ctx as RenderingContext2D, svg)
    v.render()
    const img = canvas.toDataURL('image/png')
    document.body.removeChild(canvas)
    // download img
    downloadDataURL(img, `${name}.png`)
  }

  return {
    copyName,
    copySVG,
    copyComponentCode,
    downloadSVG,
    downloadPNG
  }
}