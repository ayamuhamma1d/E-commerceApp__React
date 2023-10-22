import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/slice/counterSlice';
const Counter = () => {
  const dispatch = useDispatch();
  const counterGlobalState = useSelector(store => store.counterReducer.counter);
  const handleIncrement = () => dispatch(increment())
  const handleDecrement = () => dispatch(decrement())
  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className=" d-flex justify-content-center align-items-center ">
          <button className='btn btn-warning me-5 px-4' onClick={handleIncrement}>+</button>
          <h1 className='mb-0'>Donate for us : {counterGlobalState} $</h1>
          <button className='btn btn-warning ms-5  px-4' onClick={handleDecrement}>-</button>
        </div>
      </div>
    </>
  )
}
export default Counter