import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Fiction from './Pages/Fiction'
import NonFiction from './Pages/NonFiction'
import ScienceFiction from './Pages/ScienceFiction'
import Mystrythriller from './Pages/Mystrythriller'
import Selfhelp from './Pages/Selfhelp'
import Biography from './Pages/Biography'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fiction' element={<Fiction />} />
          <Route path='/non-fiction' element={<NonFiction />} />
          <Route path='/science-fiction' element={<ScienceFiction />} />
          <Route path='/mysterythriller' element={<Mystrythriller />} />
          <Route path='/selfhelp' element={<Selfhelp />} />
          <Route path='/biography' element={<Biography />} />
        </Routes>
        <Footer />
      </Router>

      
      
    </div>
  )
}

export default App
