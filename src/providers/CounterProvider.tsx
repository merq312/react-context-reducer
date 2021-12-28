import { createContext, Dispatch, ReactNode } from 'react'
import useCounter, { counterState, Action } from '../hooks/useCounter'

type CounterContext = {
  state: typeof counterState
  dispatch: Dispatch<Action>
}

export const CounterContext = createContext<CounterContext>(
  {} as CounterContext
)

type AppProps = {
  children: ReactNode
}

function CounterProvider({ children }: AppProps) {
  const { state, dispatch } = useCounter()

  // MIDDLEWARE
  const LogDispatch = (value: Action) => {
    console.log(value)
    dispatch(value)
  }

  return (
    <CounterContext.Provider value={{ state: state, dispatch: LogDispatch }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
