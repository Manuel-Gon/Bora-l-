import { useState } from 'react'
import './App.css'
import Cofrinho from './components/Cofrinho'
import MediaConceito from './components/MediaConceito'
import VendaProduto from './components/VendaProduto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cofrinho />

    <MediaConceito />

    <VendaProduto />

    </>
  )
}

export default App
