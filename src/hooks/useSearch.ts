import * as antdIcons from '@twist-space/react-icons/ai'
import * as tdesignIcons from '@twist-space/react-icons/ti'
import { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { useParams } from 'react-router-dom'
import type { IconSet } from '@/layout/Icons/components/Icons'

const IconSets = new Map()
IconSets.set('ai', { prefix: 'ai', icons: antdIcons })
IconSets.set('ti', { prefix: 'ti', icons: tdesignIcons })

const allIcons = () => Array.from(IconSets.values()).map(({ icons, prefix }) =>
  Object.keys(icons).map(key => ({
    prefix,
    name: key,
    Icon: icons[key]
  }))).flat()
const getIcons = (id: string) => {
  const { icons, prefix } = IconSets.get(id)
  return Object.keys(icons).map(key => ({
    prefix,
    name: key,
    Icon: icons[key]
  }))
}

export function useSearch() {
  const { id } = useParams()
  const [searchValue, setSearchValue] = useState<string>('')
  const [iconValue, setIconValue] = useState<IconSet[]>([])
  const renderIcons = id === 'all' ? allIcons() : getIcons(id as string)

  const handleSearch = debounce((value: string) => {
    const serachResult = renderIcons.filter(
      ({ name }) => name.toLowerCase().includes(value.toLowerCase())
    )
    setIconValue(serachResult)
  }, 200)

  const handleChange = (value: string) => {
    setSearchValue(value)
    handleSearch(value)
  }

  const clearInput = () => {
    setSearchValue('')
  }

  useEffect(() => {
    if (id === 'all') {
      if (searchValue !== '') {
        handleSearch(searchValue)
        return
      }
      setIconValue(renderIcons)
      return
    }
    if (searchValue !== '') {
      handleSearch(searchValue)
      return
    }
    setIconValue(renderIcons)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return {
    currentId: id,
    iconValue,
    searchValue,
    handleSearch,
    handleChange,
    clearInput
  }
}