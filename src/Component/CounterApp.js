import React from 'react'

function CounterApp({listOfItem}) {
  return (
    <div>
        <h2>Odd Number</h2>
      <div>{listOfItem.filter((count) =>count%2 !==0).map((count,index)=>(<li key={index}>{count}</li>))}</div>
      <div>
      <h2>Even Number</h2>
    {listOfItem.filter((count) =>count%2 ==0).map((count,index)=>(<li key={index}>{count}</li>))}
    </div>
    <h2>Square Number</h2>
    <div>{listOfItem.filter((count) =>Number.isInteger(Math.sqrt(count))).map((count,index)=>(<li key={index}>{count}</li>))}</div>
    </div>
  )
}

export default CounterApp
