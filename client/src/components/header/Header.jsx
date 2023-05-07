import React from "react"
import "./Header.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faCar, faPlane, faGifts, faTaxi} from "@fortawesome/free-solid-svg-icons"

import HeaderSearch from "@/components/header/HeaderSearch.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <ul className="header-list">
          <li className="header-list-item active">
            <FontAwesomeIcon icon={faBed}/>
            <span>Stays</span>
          </li>
          <li className="header-list-item">
            <FontAwesomeIcon icon={faPlane}/>
            <span>Flights</span>
          </li>
          <li className="header-list-item">
            <FontAwesomeIcon icon={faCar}/>
            <span>Car Rentals</span>
          </li>
          <li className="header-list-item">
            <FontAwesomeIcon icon={faGifts}/>
            <span>Attractions</span>
          </li>
          <li className="header-list-item">
            <FontAwesomeIcon icon={faTaxi}/>
            <span>Airport Taxis</span>
          </li>
        </ul>
        <h1 className="header-title">Find Deals on Hotels, Homes, and Much More...</h1>
        <p className="header-desc">
          From cozy country homes to funky city apartments. Find the perfect place to
          stay.
        </p>
        <button className="header-btn">Log in / Register</button>
        <HeaderSearch/>
      </div>
    </header>
  )
}

export default Header
