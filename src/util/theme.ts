export const getTheme = () => localStorage.getItem('twist-icons-theme')

export const getSystemTheme = () => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  return systemTheme ? 'dark' : 'light'
}

export const setArcoTheme = (theme: string) => {
  document.body.setAttribute('arco-theme', theme)
}

export const removeArcoTheme = () => {
  document.body.removeAttribute('arco-theme')
}

export const setStorage = (value: string) => {
  localStorage.setItem('twist-icons-theme', value)
}

export const getCurrentTheme = () => {
  const systemTheme = getSystemTheme()
  const stroageTheme = getTheme()
  // console.log('systemTheme', systemTheme, 'stroageTheme', stroageTheme)
  return stroageTheme || systemTheme
}