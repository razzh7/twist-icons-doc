import { Space, Typography, Divider } from '@arco-design/web-react'
import CodeDemo from '../CodeDemo'
import Snippet from '@/components/Snippet'
import CodeBlock from '@/components/CodeBlock'
import IconAPI from '../IconAPI'
import IconProviderAPI from '../IconProviderAPI'
import { useI18n } from '@/hooks'
import { reactCode, vue3Code, vue2Code } from './codes'
import './index.less'

const { Title, Paragraph } = Typography

function DocContent() {
  const { t } = useI18n()
  const fullWidth = { width: '100%' }
  return (
    <Space direction='vertical' style={fullWidth}>
      <Typography>
        <Title heading={1}>Twist Icons</Title>
        <Divider />
        <Paragraph className='word'>{t('home.twist.description')}</Paragraph>
        {/* For React */}
        <Title heading={3}>
          <div className="anthor-title">
            <a id='react' href="#react">
            #
            </a>
            {t('home.react')}
          </div>
        </Title>
        <Space direction='vertical' size='medium' style={fullWidth}>
          <Snippet>
            <CodeBlock code='npm i @twist-space/react-icons --save' language='bash' />
          </Snippet >
          <Snippet>
            <CodeBlock code={reactCode} language='tsx' />
          </Snippet >
        </Space>

        {/* For Vue3 */}
        <Title heading={3}>
          <div className="anthor-title">
            <a id='vue3' href="#vue3">
            #
            </a>
            {t('home.vue3')}
          </div>
        </Title>
        <Space direction='vertical' size='medium' style={fullWidth}>
          <Snippet>
            <CodeBlock code='npm i @twist-space/vue3-icons --save' language='bash' />
          </Snippet >
          <Snippet>
            <CodeBlock code={vue3Code} language='typescript' />
          </Snippet >
        </Space>

        {/* For Vue2 */}
        <Title heading={3}>
          <div className="anthor-title">
            <a id='vue2' href="#vue2">
            #
            </a>
            {t('home.vue2')}
          </div>
        </Title>
        <Space direction='vertical' size='medium' style={fullWidth}>
          <Snippet>
            <CodeBlock code='npm i @twist-space/vue2-icons --save' language='bash' />
          </Snippet >
          <Snippet>
            <CodeBlock code={vue2Code} language='javascript' />
          </Snippet>
        </Space>

        {/* Icon API */}
        <Title heading={3}>
          <div className="anthor-title">
            <a id='iconApi' href="#iconApi">
            #
            </a>
          Icon API
          </div>
        </Title>
        <Paragraph style={{ fontSize: '16px' }}>{t('api.paragraph')}</Paragraph>
        <Space direction='vertical' size='medium' style={{ width: '70%' }}>
          <IconAPI />
        </Space>

        {/* IconProvide API */}
        <Title heading={3}>
          <div className="anthor-title">
            <a id='iconProvider' href="#iconProvider">
            #
            </a>
          IconProvider API
          </div>
        </Title>
        <Paragraph style={{ fontSize: '16px' }}>{t('api.iconProvider')}</Paragraph>
        <Space direction='vertical' size='medium' style={{ width: '70%' }}>
          <IconProviderAPI />
        </Space>

        <Title heading={3}>
          <div className="anthor-title">
            <a id='OnlineDemo' href="#OnlineDemo">
            #
            </a>
            {t('home.demo')}
          </div>
        </Title>
        <CodeDemo />
      </Typography>
    </Space>
  )
}

export default DocContent