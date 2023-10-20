import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Fruits from './Pages/Fruits'
import CreateFruits from './Pages/CreateFruits'
import CreateVeggies from './Pages/CreateVaggies'
import Veggies from './Pages/Veggies'
function App() {
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create</button>
        </Link>
        <Link to="/veggies">
          <button>Veggies</button>
        </Link>
        <Link to="/veggies/create">
          <button>Create New Veggie</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Fruits />}></Route>
        <Route path="/create" element={<CreateFruits />}></Route>
        <Route path="/veggies" element={<Veggies />}></Route>
        <Route path="/veggies/create" element={<CreateVeggies />}></Route>
      </Routes>
    </div>
  )
}
export default App
