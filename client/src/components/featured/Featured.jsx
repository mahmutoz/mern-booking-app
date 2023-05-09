import React from 'react';
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <img
          className="featured-img"
          src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
          alt="featured image"/>
        <div className="featured-titles">
          <h1>Dublin</h1>
          <h2>512 Properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          className="featured-img"
          src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
          alt="featured image"/>
        <div className="featured-titles">
          <h1>Belgium, Ciney</h1>
          <h2>112 Properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          className="featured-img"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=e177d075cc62b532784bf1e671dc23011fec10163dd98ff7cff55c47c526afd7&o="
          alt="featured image"/>
        <div className="featured-titles">
          <h1>Poland, Zakopane</h1>
          <h2>24 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
