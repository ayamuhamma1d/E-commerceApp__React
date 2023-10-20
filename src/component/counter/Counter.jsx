import React, { useState } from 'react'
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increaseCount = () => {
    setCounter(counter + 1);
  }
  const decreaseCount = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className=" d-flex justify-content-center align-items-center ">
          <button className='btn btn-warning me-5 px-4' onClick={increaseCount}>+</button>
          <h1 className='mb-0'>{counter}</h1>
          <button className='btn btn-warning ms-5  px-4' onClick={decreaseCount}>-</button>
        </div>
      </div>
    </>
  )
}

export default Counter