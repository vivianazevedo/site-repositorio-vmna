import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Principal from './pages/Principal'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/portfolio/projeto1" element={<Projeto1 />} />
        <Route path="/portfolio/projeto2" element={<Projeto2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App