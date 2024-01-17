import { useState } from 'react'
import Home from './component/Home'
import Qrcode from './component/Qrcode'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/qrcode' element={<Qrcode/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
