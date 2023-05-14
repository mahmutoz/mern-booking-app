import React from "react"
import "./FeaturedProperties.scss"

const FeaturedProperties = () => {
  return (
    <ul className="fp">
      <li className="fp-item">
        <img
          className="fp-img"
          src="https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o="
          alt="property"
        />
        <span className="fp-name">ApartHotel Stare Miastro</span>
        <span className="fp-city">Madrid</span>
        <span className="fp-price">$100/night</span>
        <div className="fp-rating">
          <button className="fp-rating-btn">4.5</button>
          <span>Excellent</span>
        </div>
      </li>
      <li className="fp-item">
        <img
          className="fp-img"
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt="property"
        />
        <span className="fp-name">ApartHotel Stare Miastro</span>
        <span className="fp-city">Madrid</span>
        <span className="fp-price">$100/night</span>
        <div className="fp-rating">
          <button className="fp-rating-btn">4.5</button>
          <span>Excellent</span>
        </div>
      </li>
      <li className="fp-item">
        <img
          className="fp-img"
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt="property"
        />
        <span className="fp-name">ApartHotel Stare Miastro</span>
        <span className="fp-city">Madrid</span>
        <span className="fp-price">$100/night</span>
        <div className="fp-rating">
          <button className="fp-rating-btn">4.5</button>
          <span>Excellent</span>
        </div>
      </li>
    </ul>
  )
}

export default FeaturedProperties;