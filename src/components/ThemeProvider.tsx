/* eslint-disable no-case-declarations */
import { ReactNode, createContext, useEffect, useState } from "react"

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
  const presetTheme = localStorage.getItem('twist-icons-theme') as ThemeMode
  const [theme, setTheme] = useState<ThemeMode>(presetTheme)
  const handleThemeChange = (theme: ThemeMode) => {
    switch (theme) {
    case 'light':
      document.body.setAttribute('arco-theme', 'light')
      localStorage.setItem('twist-icons-theme', 'light')
      break
    case 'dark':
      document.body.setAttribute('arco-theme', 'dark')
      localStorage.setItem('twist-icons-theme', 'dark')
      break
    default:
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      const themeToApply = prefersDarkMode ? 'dark' : 'light'
      document.body.setAttribute('arco-theme', themeToApply)
      localStorage.setItem('twist-icons-theme', 'system')
      break
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
    const localTheme = localStorage.getItem('twist-icons-theme') as ThemeMode
    handleThemeChange(localTheme)
  }, [])


  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}