import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router'

import AboutUs from './components/AboutUs'
import OtherInfo from './components/OtherInfo'

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/about-us" element={<AboutUs/>}></Route>
      <Route path="/other-info" element={<OtherInfo/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
