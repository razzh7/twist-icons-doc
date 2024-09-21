import * as AntdIcons from '@twistify/react-icons/ai'
import * as TdesignIcons from '@twistify/react-icons/ti'
import * as MaterialSymbols from '@twistify/react-icons/mi'
import * as SvgSpinners from '@twistify/react-icons/si'
import * as IonIcons from '@twistify/react-icons/ion'
import * as Tabler from '@twistify/react-icons/ta'
import * as BootstrapIcons from '@twistify/react-icons/bi'
import * as MaterialDesign from '@twistify/react-icons/mdi'
import * as RadixIcons from '@twistify/react-icons/ra'
import * as SkillIcons from '@twistify/react-icons/sk'
import * as Cssgg from '@twistify/react-icons/gg'
import * as Solar from '@twistify/react-icons/so'
import * as ElementPlus from '@twistify/react-icons/ep'
import * as TwitterEmoji from '@twistify/react-icons/te'
import * as Phosphor from '@twistify/react-icons/ph'
import * as SystemUicons from '@twistify/react-icons/su'
import * as LucideIcons from '@twistify/react-icons/lu'
import { IconsManifest, type IconProps, type IconType } from '@twistify/react-icons'

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
IconSets.set('gg', { prefix: 'gg', icons: Cssgg })
IconSets.set('so', { prefix: 'so', icons: Solar })
IconSets.set('ep', { prefix: 'ep', icons: ElementPlus })
IconSets.set('te', { prefix: 'te', icons: TwitterEmoji })
IconSets.set('ph', { prefix: 'ph', icons: Phosphor })
IconSets.set('su', { prefix: 'su', icons: SystemUicons })
IconSets.set('lu', { prefix: 'lu', icons: LucideIcons })

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
