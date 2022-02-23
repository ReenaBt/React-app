import React from 'react'
import './WeatherCard.css'
const Temperature = (props) => {

  return (
    <div className="card__elem">
          <span className="card__elem">{props.temp}</span>
          <span className="card__elem--temp">{props.value}</span>
      <span className="card__elem--degree"></span>
      <span>C</span>
    </div>
  );
}

export default Temperature