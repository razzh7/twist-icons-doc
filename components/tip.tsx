'use client'
import React from 'react'
import {
  Alert,
  AlertDescription
} from "@/components/ui/alert"

interface TipProps extends React.HtmlHTMLAttributes<HTMLElement> {
  value: string
}

export function Tip({ value, ...props }: TipProps) {
  return (
    <Alert {...props}>
      <AlertDescription>
        { value }
      </AlertDescription>
    </Alert>
  )
}
