import React from "react"
import "./PropertyList.scss"

const PropertyList = () => {
  return (
    <ul className="property">
      <li className="property-item">
        <img
          className="property-item-img"
          src="https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o="
          alt="property"
        />
        <div className="property-item-info">
          <h2 className="property-item-info-title">House</h2>
          <p className="property-item-info-desc">Lorem ipsum dolor sit amet</p>
        </div>
      </li>
      <li className="property-item">
        <img
          className="property-item-img"
          src="https://cf.bstatic.com/xdata/images/city/600x600/976539.jpg?k=0a7263960952588dc71a60f1f9c2e738b5c0af9b2d9d3c3df79677d630b8a665&o="
          alt="property"
        />
        <div className="property-item-info">
          <h2 className="property-item-info-title">House</h2>
          <p className="property-item-info-desc">Lorem ipsum dolor sit amet</p>
        </div>
      </li>
      <li className="property-item">
        <img
          className="property-item-img"
          src="https://cf.bstatic.com/xdata/images/city/600x600/613105.jpg?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o="
          alt="property"
        />
        <div className="property-item-info">
          <h2 className="property-item-info-title">House</h2>
          <p className="property-item-info-desc">Lorem ipsum dolor sit amet</p>
        </div>
      </li>
      <li className="property-item">
        <img
          className="property-item-img"
          src="https://cf.bstatic.com/xdata/images/city/600x600/971374.jpg?k=95b428839d92c523c81fc50dd7158a9073bbdf92df2a5166748b2d396976ae32&o="
          alt="property"
        />
        <div className="property-item-info">
          <h2 className="property-item-info-title">House</h2>
          <p className="property-item-info-desc">Lorem ipsum dolor sit amet</p>
        </div>
      </li>
      <li className="property-item">
        <img
          className="property-item-img"
          src="https://cf.bstatic.com/xdata/images/city/600x600/644630.jpg?k=700ac1d32a3bab480b14db2cba3050abe5b5bce062911dc4f5b3fdc15d81f007&o="
          alt="property"
        />
        <div className="property-item-info">
          <h2 className="property-item-info-title">House</h2>
          <p className="property-item-info-desc">Lorem ipsum dolor sit amet</p>
        </div>
      </li>
    </ul>
  )
}

export default PropertyList;