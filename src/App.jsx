import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
