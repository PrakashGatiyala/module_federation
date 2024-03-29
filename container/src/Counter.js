import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "store/counterSlice"

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

  return (
    <div style={{ width: '5vw', height: '5vh'}}>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}