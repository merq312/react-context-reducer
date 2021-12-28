import { useContext } from 'react'
import { CounterContext } from '../providers/CounterProvider'
import { incrementAction } from '../hooks/useCounter'

function IncrementCount() {
  const { dispatch } = useContext(CounterContext)

  const handleClick = () => {
    dispatch(incrementAction())
  }

  return (
    <>
      <button onClick={handleClick}>Increment</button>
    </>
  )
}

export default IncrementCount
