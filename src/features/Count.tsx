import { useContext } from 'react'
import { CounterContext } from '../providers/CounterProvider'

function Count() {
  const { state } = useContext(CounterContext)

  return <div>{state.count}</div>
}

export default Count
