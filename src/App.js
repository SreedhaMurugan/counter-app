import React from 'react';
import { useState } from 'react';
import './App.css';
import CounterApp from './Component/CounterApp';

function App() {
  const[count,setCount]=useState(0);
  const[arrayNumber,setarrayNumber]=useState([]);


  function increment(){
  setCount(count+1)
  setarrayNumber([...arrayNumber,count+1]);
  console.log(count,"print the numbers");
  
   }
  function decrement(){
  setCount(count-1)
  }




  
  return (
    <div className="App">
      <div className='btn'>
        <button onClick={increment}>Increment</button>
        <div><b>Counter Value {count}</b></div>
        <button onClick={decrement} 
        disabled={count===0}>Decrement</button>
      </div>
      <div>
       <CounterApp listOfItem={arrayNumber} />
      </div>
    </div>
  );
}

export default App;
