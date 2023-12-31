import React from 'react'
import type { IconProps, IconType } from "@twist-space/react-icons"

export interface IconPropsBase {
  Icon: IconType,
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export interface IconThumnail extends IconPropsBase {}

export interface IconGridProps extends IconPropsBase {
  name: string
}

export type IconDefinition = React.ReactElement<IconProps>