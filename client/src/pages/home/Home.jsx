import React from "react"
import "./Home.scss"
import Navbar from "@/components/navbar/Navbar.jsx"
import Header from "@/components/header/Header.jsx"
import Featured from "@/components/featured/Featured.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Header/>
      <div className="home-container">
        <Featured/>
      </div>
    </div>
  )
}

export default Home
