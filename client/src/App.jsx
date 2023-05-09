import React, {lazy, Suspense} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

const Home = lazy(() => import("@/pages/home/Home"))
const List = lazy(() => import("@/pages/list/List"))
const Hotel = lazy(() => import("@/pages/hotel/Hotel"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hotels" element={<List/>}/>
          <Route path="/hotels/:id" element={<Hotel/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
