import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './homeSlice'

export function Home() {
    const count = useSelector((state) => state.home.value);
    const dispatch = useDispatch()

  return (
    <div>
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