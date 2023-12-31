import { useContext } from 'react'
import { ThemeContext, ThemeContextProps } from '@/components/ThemeProvider'

export const useTheme = () => useContext(ThemeContext) as ThemeContextProps