/* eslint-disable no-case-declarations */
import { ReactNode, createContext, useEffect, useState } from "react"
import { getCurrentTheme, setArcoTheme, setStorage, getSystemTheme } from '@/util/theme'

export type ThemeMode = 'light' | 'dark' | 'system' | undefined
export interface ThemeContextProps {
  theme: ThemeMode;
  toggleTheme: (theme: ThemeMode) => void;
}
export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {}
})

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const currentTheme = getCurrentTheme() as ThemeMode
  const [theme, setTheme] = useState<ThemeMode>(currentTheme)
  const handleThemeChange = (theme: ThemeMode) => {
    switch (theme) {
    case 'light':
      setArcoTheme(theme)
      setStorage(theme)
      setTheme(theme)
      break
    case 'dark':
      setArcoTheme(theme)
      setStorage(theme)
      setTheme(theme)
      break
    default:
      const prefersMode = getSystemTheme()
      setStorage('system')
      setArcoTheme(prefersMode)
      setTheme(prefersMode)
    }
  }
  const toggleTheme = (theme: ThemeMode) => {
    handleThemeChange(theme)
    setTheme(theme)
  }
  const contextValue:ThemeContextProps = {
    theme,
    toggleTheme
  }

  useEffect(() => {
    setTheme(theme)
  }, [theme])


  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}