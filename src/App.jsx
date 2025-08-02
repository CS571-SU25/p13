import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router'

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import ROSApp from './components/ROSApp';
import Instructions from './components/Instructions';
import Settings from './components/Settings';

function App() {
  return <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/robot" element={<ROSApp/>}></Route>
      <Route path="/instructions" element={<Instructions/>}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  </HashRouter>
}

export default App
