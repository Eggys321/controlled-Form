import logo from './logo.svg'
import './App.css'
import Home from './Home';
import Services from './Services'
import About from './About';
import Navbar from './Navbar';
import Error from './Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='services' element={<Services/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
