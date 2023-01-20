// Counter.js
import { useDispatch, useSelector } from 'react-redux'

import {
  decrement,
  getCounter,
  getIsCounterShow,
  increase,
  increment,
  toggleCounter,
} from '@/redux/reducers/counterSlice'

const Counter = () => {
  const dispatch = useDispatch()
  const amount = useSelector(getCounter)
  const show = useSelector(getIsCounterShow)

  const incrementHandler = () => {
    dispatch(increment())
  }

  const increaseHandler = () => {
    dispatch(increase(10)) // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(toggleCounter())
  }

  return (
    <>
      {show && <div className='text-purple-300'>{amount}</div>}
      <button onClick={incrementHandler} type='button'>
        Increment
      </button>
      <button onClick={increaseHandler} type='button'>
        Increase by 10
      </button>
      <button onClick={decrementHandler} type='button'>
        Decrement
      </button>
      <button onClick={toggleCounterHandler} type='button'>
        Toggle Counter
      </button>
    </>
  )
}

export default Counter
