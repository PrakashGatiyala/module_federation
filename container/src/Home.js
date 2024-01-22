import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from 'store/homeSlice'
// import { counter_decrement, counter_increment } from "store/counterSlice"


export function Home() {
    const count = useSelector((state) => state.home.value);
    const dispatch = useDispatch()

  return (
    <div style={{ width: '5vw', height: '5vh'}}>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Home_Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Home_Decrement
        </button>
      </div>
    </div>
  )
}