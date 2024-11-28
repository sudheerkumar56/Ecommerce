import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Admin from './pages/admin/admin';


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>

        <Navbar/>
        <Admin/>
        <Routes>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App