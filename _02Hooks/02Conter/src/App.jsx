import { useState } from 'react'

const App = () => {


  // let counter = 5;

  let [counter, setCounter] = useState(0)

  const incressvalue = () => {
    counter = counter + 1;
    setCounter(counter);
  }
  const decresssvalue = () => {
    counter = counter - 1;
    setCounter(counter);
  } 
  return (
    <div>
      <h1>Chai With React </h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={incressvalue}>Incress Value</button>
      <br />
      <br />
      <button onClick={decresssvalue}>decress Value</button>
    </div>
  )
}

export default App