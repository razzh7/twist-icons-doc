import { useState, useEffect, useRef } from "react"
import { allIcons, getIcons, filterCategories } from "@/lib/twist-icons"
import { useDebouncedCallback } from 'use-debounce'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import type { IconProps } from "@/types/icons"

export function useIcons(id: string) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = useRef(searchParams.get('s') ?? '')
  const [icons, setIcons] = useState<IconProps[]>([])
  const [max, setMax] = useState(200)
  const categories = filterCategories(id)
  const currentPath = pathname.split('/').pop()

  const specifiedIcons = getIcons(id)
  const searchIcons = useDebouncedCallback((value: string) => {
    const curIcons = currentPath === 'all' ? allIcons : specifiedIcons
    const searchResult = curIcons.filter(
      ({ name }: IconProps) => name.toLowerCase().includes(value.toLowerCase())
    )
    setIcons(searchResult)
  }, 300)

  const updateParams = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('s', value)
    } else {
      params.delete('s')
    }
    router.replace(`${pathname}?${params.toString()}`)
    if (value === '') return setIcons(specifiedIcons)
  }

  const handleSearch = (value: string) => {
    updateParams(value)
    searchIcons(value)
  }

  useEffect(() => {
    if (params.current) {
      searchIcons(params.current)
      return
    }
    setIcons(getIcons(id))
  }, [pathname, id, searchIcons])

  return {
    icons,
    setIcons,
    max,
    setMax,
    categories,
    searchParams,
    handleSearch,
    currentPath
  }
}
