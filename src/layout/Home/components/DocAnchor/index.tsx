import { useState, useCallback, useEffect } from 'react'
import { Anchor } from '@arco-design/web-react'
import { useI18n } from '@/hooks'

const AnchorLink = Anchor.Link

function GuideAnchor() {
  const { t } = useI18n()
  const [anchorCollapse, setAnchorCollapse] = useState(window.innerWidth <= 1440)

  const onResize = useCallback(() => {
    const windowWidth = window.innerWidth
    if (windowWidth <= 1200 && !anchorCollapse) {
      setAnchorCollapse(true)
    }
    if (windowWidth > 1440 && anchorCollapse) {
      setAnchorCollapse(false)
    }
  }, [anchorCollapse])

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return (
    !anchorCollapse &&
    <Anchor
      lineless
      boundary={80}
      affix={false}
    >
      <AnchorLink href='#react' title={t('home.react')} />
      <AnchorLink href='#vue3' title={t('home.vue3')} />
      <AnchorLink href='#vue2' title={t('home.vue2')} />
      <AnchorLink href='#iconApi' title='Icon API' />
      <AnchorLink href='#iconProvider' title='IconProvider API' />
      <AnchorLink href='#autoImport' title={t('home.autoImport')} />
      <AnchorLink href='#OnlineDemo' title={t('home.demo')} />
    </Anchor>
  )
}

export default GuideAnchor
