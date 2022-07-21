import './App.css';
import { useState } from 'react';

const App = () => {
  return (
    <div className="App">
      <Img />
      <Counter />
      <Input placeholder="User"/>
      <Input placeholder="Password"/>
    </div>
  );
}
const Input = ({placeholder}) => {
  return (
    <input placeholder={placeholder} className='Input-text' type="text" />
  );
}

const Img = () => {
  return (
    <img className='Img' src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
  );
}

const Counter = () => {
  const [counter, updateCounter] = useState({
      down: 0,
      up:0
    });

  const handleIncrementDown = () =>{
    const newState = {
      ...counter,
      down: counter.down + 1
    }
    updateCounter(newState)
  }
  const handleIncrementUp = () =>{
    const newState = {
      ...counter,
      up: counter.up + 1
    }
    updateCounter(newState)
  }
  const handleReset = () =>{
    const newState = {
      up: 0,
      down:0
    }
    updateCounter(newState)
  }
  return (
    <div className='Counter'>
      <p >{counter.up}</p> 
      <button onClick={handleIncrementUp}>Incrementar</button>
      <p >{counter.down}</p>
      <button onClick={handleIncrementDown}>Incrementar</button>
      <p>Clicks totales: {counter.up+counter.down}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
    
  )
}

export default App;
