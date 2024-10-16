import { useState } from 'react'

import './App.css'
import { Itemlist } from './Components/Additems/Itemlist'
import MainCusins  from './Components/mainCusins/MainCusins'
import Footer from './Components/footer/Footer'

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
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App
