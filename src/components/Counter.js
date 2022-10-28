import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/index'


function Counter() {

  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  let increment = () => {
    dispatch(actions.increment())
  }
  let decrement = () => {
    dispatch(actions.decrement())
  }

  return (
    <div className='counter'>
      <h1> your counter is  {counter} .</h1>
      <button onClick={increment}> increment</button>
      <button onClick={decrement}> Decremetn</button>
    </div>
  )
}

export default Counter;