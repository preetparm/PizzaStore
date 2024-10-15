import { useState } from 'react'

import './App.css'
import { Itemlist } from './Components/Additems/Itemlist'
import MainCusins  from './Components/mainCusins/MainCusins'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainApp'>
      <div className='itemlist'>
        <Itemlist />
      </div>
      <div className='maincusin'>
        <MainCusins />
      </div>
    </div>
  );
}

export default App
