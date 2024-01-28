import * as AntdIcons from '@twist-space/react-icons/ai'
import * as TdesignIcons from '@twist-space/react-icons/ti'
import * as MaterialSymbols from '@twist-space/react-icons/mi'
import * as SvgSpinners from '@twist-space/react-icons/si'
import * as IonIcons from '@twist-space/react-icons/ion'
import * as Tabler from '@twist-space/react-icons/ta'
import * as BootstrapIcons from '@twist-space/react-icons/bi'
import * as MaterialDesign from '@twist-space/react-icons/mdi'
import * as RadixIcons from '@twist-space/react-icons/ra'
import * as SkillIcons from '@twist-space/react-icons/sk'
import * as Cssgg from '@twist-space/react-icons/gg'
import * as Solar from '@twist-space/react-icons/so'
import { IconsManifest, type IconProps, type IconType } from '@twist-space/react-icons'

interface IconSets {
  prefix: string
  icons: Record<string, IconType>
}

const IconSets = new Map<string, IconSets>()
IconSets.set('ai', { prefix: 'ai', icons: AntdIcons })
IconSets.set('ti', { prefix: 'ti', icons: TdesignIcons })
IconSets.set('mi', { prefix: 'mi', icons: MaterialSymbols })
IconSets.set('si', { prefix: 'si', icons: SvgSpinners })
IconSets.set('ion', { prefix: 'ion', icons: IonIcons })
IconSets.set('ta', { prefix: 'ta', icons: Tabler })
IconSets.set('bi', { prefix: 'bi', icons: BootstrapIcons })
IconSets.set('mdi', { prefix: 'mdi', icons: MaterialDesign })
IconSets.set('ra', { prefix: 'ra', icons: RadixIcons })
IconSets.set('sk', { prefix: 'sk', icons: SkillIcons })
IconSets.set('gg', { prefix: 'sk', icons: Cssgg })
IconSets.set('so', { prefix: 'so', icons: Solar })

const _cache = new Map()

export const allCategories = () => {
  const rawManifest = IconsManifest.map(({ id, name }) => ({
    key: id,
    name
  })).sort((a, b) => a.name.localeCompare(b.name))

  return [{ key: 'all', name: 'All Icons' }].concat(rawManifest)
}

export const filterCategories = (id: string) => IconsManifest.find(({ id: _id }) => _id === id)

export const allIds = IconsManifest.map(({ id, name }) => ({ id, name }))

export const allIcons = Array.from(IconSets.values()).map(({ icons, prefix }) =>
  Object.keys(icons).map(key => ({
    prefix,
    name: key,
    Icon: icons[key]
  }))).flat()

export const specifiedIcons = (id: string) => {
  const { icons, prefix } = IconSets.get(id) as IconSets
  return Object.keys(icons).map(key => ({
    prefix,
    name: key,
    Icon: icons[key]
  }))
}

export const getIcons = (id: string) => {
  if (id === 'all') return allIcons
  if (_cache.has(id)) return _cache.get(id)

  _cache.set(id, specifiedIcons(id))
  return _cache.get(id)
}

interface IconInfoProps {
  name: string
  id: string
  len: number
  icons: React.FC<IconProps>[]
}

export const iconInfo = () => {
  const iconCollection: IconInfoProps[] = []

  IconsManifest.map(({ id, name }) => {
    const { icons } = IconSets.get(id) as IconSets
    iconCollection.push({
      name,
      id,
      len: Object.keys(icons).length,
      icons: Object.values(icons).slice(0, 9) as React.FC<IconProps>[]
    })
  })

  return iconCollection.sort((a, b) => a.name.localeCompare(b.name))
}