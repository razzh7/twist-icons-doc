import { ReactElement, useState } from "react"
import type { IconType } from "@twistify/react-icons"
import type { IconProps } from "@/types/icons"

export function useModal() {
  const [prefixId, setPrefixId] = useState('')
  const [iconName, setIconName] = useState('')
  const [ActiveIcon, setActiveIcon] = useState<ReactElement<IconType>>()
  const [open, setOpen] = useState(false)

  const openModal = async ({ prefix, name, Icon }: IconProps) => {
    setPrefixId(prefix)
    setIconName(name)
    setActiveIcon(<Icon size={128} />)
    setOpen(true)
  }

  return {
    open,
    setOpen,
    openModal,
    prefixId,
    iconName,
    ActiveIcon,
    setActiveIcon
  }
}
