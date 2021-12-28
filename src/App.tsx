import StoreProvider from './providers/CounterProvider'
import Count from './features/Count'
import IncrementCount from './features/IncrementCount'
import './App.css'

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Count />
        <Count />
        <IncrementCount />
      </div>
    </StoreProvider>
  )
}

export default App
