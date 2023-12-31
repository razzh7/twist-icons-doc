import { ReactElement } from "react"
import { Message } from "@arco-design/web-react"
import { renderToString } from 'react-dom/server'
import { useTranslation } from 'react-i18next'
import { download, downloadDataURL } from "@/util"
import { Canvg, type RenderingContext2D } from 'canvg'
import copy from 'copy-to-clipboard'
import { IconProps } from "@twist-space/react-icons"

const useActions = () => {
  const { t } = useTranslation()
  const copyName = async (name: string) => {
    await copy(name)
    Message.success(t('copy.message.name', { name }))
  }

  const getSVG = (svgComponent: ReactElement<IconProps>) => {
    const html = renderToString(svgComponent)
    return '<?xml version="1.0" encoding="UTF-8"?>\n' + html
  }

  const copySVG = async (svgComponent: ReactElement<IconProps>) => {
    const svg = getSVG(svgComponent)
    await copy(svg)
    Message.success('copy.message.svg')
  }

  const copyComponentCode = async (name: string) => {
    await copy(`<${name} />`)
    Message.success(t('copy.message.component', { name }))
  }

  const downloadSVG = (name: string, svgComponent: ReactElement) => {
    const svg = getSVG(svgComponent)
    const file = new File([svg], `${name}.svg`, {
      type: 'image/svg'
    })
    download(file)
  }

  const downloadPNG = async (name: string, svgComponent: ReactElement) => {
    const svg = getSVG(svgComponent)
    // create canvas
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    const cs = document.querySelector('canvas')!
    // render svg on canvas
    const ctx = cs.getContext('2d')
    const v = await Canvg.fromString(ctx as RenderingContext2D, svg)
    v.render()
    const img = canvas.toDataURL('image/png')
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

export default useActions