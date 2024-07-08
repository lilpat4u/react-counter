import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.scss'

function App() {
 let [count, setCount] = useState(0)

  const Increment = () => {
    setCount(count + 1)
  };
  
  const Decrement = () => {
    setCount(count - 1)
  };

  return (
    <div className="App">
    <div>
      <h2>Счетчик:</h2>
      <h1>{count}</h1>
      <button onClick={Decrement} className="minus">- Минус</button>
      <button onClick={Increment} className="plus">Плюс +</button>
    </div>
  </div>
  )
}

export default App
