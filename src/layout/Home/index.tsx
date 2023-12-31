import { useTitle } from '@/hooks'
import DocAnchor from './components/DocAnchor'
import DocContent from './components/DocContent'
import './index.less'

function Home() {
  useTitle('Twist Icons')

  return (
    <div className='installation-wrapper'>
      <div className='anchor'>
        <DocAnchor />
      </div>
      <div className="installation">
        <DocContent />
      </div>
    </div>
  )
}

export default Home