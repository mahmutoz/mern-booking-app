import React from "react"
import "./Navbar.scss"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Booking
        </Link>
        <div className="nav-auth">
          <button className="nav-btn">Register</button>
          <button className="nav-btn">Login</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
