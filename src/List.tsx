import * as Ai from '@twist-space/react-icons/ai'
import * as Ti from '@twist-space/react-icons/ti'

function IconList() {
  const Icons = Object.keys(Ai).concat(Object.keys(Ti))
  return <div>
    {Icons.map((icon, index) => <div key={index}>
      {icon}
    </div>)}
  </div>
}

export default IconList