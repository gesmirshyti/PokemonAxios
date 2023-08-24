import { useState } from 'react'
import FirstCMP from './assets/components/FirstCMP'
import SecondCMP from './assets/components/SecondCMP'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <FirstCMP></FirstCMP>
  <SecondCMP></SecondCMP>
    </>
  )
}

export default App
