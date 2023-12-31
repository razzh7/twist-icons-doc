import { Anchor } from '@arco-design/web-react'
import { useI18n } from '@/hooks'

const AnchorLink = Anchor.Link

function GuideAnchor() {
  const { t } = useI18n()

  return (
    <Anchor
      lineless boundary={80} affix={false}
    >
      <AnchorLink href='#react' title={t('home.react')} />
      <AnchorLink href='#vue3' title={t('home.vue3')} />
      <AnchorLink href='#vue2' title={t('home.vue2')} />
      <AnchorLink href='#iconApi' title='Icon API' />
      <AnchorLink href='#iconProvider' title='IconProvider API' />
      <AnchorLink href='#OnlineDemo' title={t('home.demo')} />
    </Anchor>
  )
}

export default GuideAnchor
