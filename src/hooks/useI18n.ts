import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Message } from '@arco-design/web-react'

export type language = 'en' | 'zh'

export const useI18n = () => {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lang: language) => {
    const currentLang = localStorage.getItem('twist-doc-lang')
    if (currentLang === lang) return
    localStorage.setItem('twist-doc-lang', lang)
    i18n.changeLanguage(lang)
    Message.success(t('language.switch', { lang: lang === 'en' ? 'English' : '简体中文' }))
  }

  useEffect(() => {
    const lang = localStorage.getItem('twist-doc-lang')
    if (lang) {
      i18n.changeLanguage(lang)
    } else {
      // set default language
      localStorage.setItem('twist-doc-lang', 'en')
    }
  }, [i18n])

  return {
    t,
    changeLanguage
  }
}