import { useReducer } from 'react'

export const counterState = {
  count: 0,
}

export type Action = { type: 'INCREMENT' }

const reducer = (state: typeof counterState, action: Action) => {
  if (action.type === 'INCREMENT') {
    return { ...state, count: state.count + 1 }
  } else {
    return { ...state }
  }
}

export const incrementAction = (): Action => {
  return { type: 'INCREMENT' }
}

const useCounter = () => {
  const [state, dispatch] = useReducer(reducer, counterState)

  return { state, dispatch }
}

export default useCounter
