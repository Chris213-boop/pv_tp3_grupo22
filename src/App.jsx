import { useState } from 'react'
import Productos from './assets/components/Producto'
import Tarea from "./assets/components/Tarea";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='titulo'> Programacion Visual </h1>
      <Productos/>
      <Tarea/>
    </>
  )
}

export default App
