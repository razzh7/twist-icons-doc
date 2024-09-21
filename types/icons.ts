import React from 'react'
import { IconType } from "@twistify/react-icons"

export interface IconProps {
  prefix: string
  name: string
  Icon: IconType
}

export type IconDefinition = React.ReactElement<IconProps>
