import React from 'react'
import { IconType } from "@twist-space/react-icons"

export interface IconProps {
  prefix: string
  name: string
  Icon: IconType
}

export type IconDefinition = React.ReactElement<IconProps>