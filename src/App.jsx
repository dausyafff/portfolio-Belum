import "./App.css"
import React from 'react'
import Home from "./pages/Home"
import DetailPortfolio from './pages/DetailPortfolio'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import Experience from "./pages/Experience"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<DetailPortfolio />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="/experience" element={<Experience />} />
        {/* Tanda Bintang berarti semua route yang tidak ada */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App