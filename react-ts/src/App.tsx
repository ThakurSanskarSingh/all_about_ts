
import './App.css'
import { ChaiCard } from './components/Card'
import { Counter } from './components/Counter'

function App() {

  return (
    <>
    <ChaiCard 
    name="Headphones"
    price= {5000}
    />
    <Counter />
    </>

  )
}

export default App
