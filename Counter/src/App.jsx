import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function add()
  {
    if(count==25)
    {
      alert("YOU REACHED MAX VALUE")
      setCount(25)

    }
    else
    {
      alert("YOU REACHED MIN VALUE")
      setCount(count+1)
    }
    
  }

    function sub()
    {
      if(count==0)
      {
        setCount(0)
      }
      else
      {
        setCount(count-1)
      }
    }
    let reset=()=>
    {
      setCount(0)
    }
  return (
    <div className='Counter'>
    <p>Count : {count}</p>
          <button onClick={add}>+</button>
          <button onClick={sub}>-</button>
          <button onClick={reset}>-</button>
    </div>
  )
}

export default App
