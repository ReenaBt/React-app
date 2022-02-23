import React from 'react';
import Temperature from './Temperature';
import './WeatherCard.css'
const WeatherCard = (props) => {
      
    let minTemp = (props.details.temperature.Minimum.Value -32)*(5/9);
    let maxTemp = (props.details.temperature.Maximum.Value - 32) * (5 / 9);
    let hasPrecipitation = props.details.day.HasPrecipitation;
    let phrase = props.details.day.IconPhrase
    if (hasPrecipitation) {
        phrase =
         
          props.details.day.PrecipitationIntensity +
            " " +
            props.details.day.IconPhrase;
    }
    return (
      <div className="card">
        <div className="card__elem">
                <span className="card__elem--title">{props.city.toUpperCase()}</span>
                <span className="card__elem--code">{ props.Id}</span>
        </div>
            <Temperature temp="High" value ={maxTemp.toFixed()} />
            <Temperature temp="Low" value={minTemp.toFixed()}  />
        <div className="card__elem">
          <i className="fa-solid fa-cloud-rain card__elem--icon"></i>
        </div>
        <div className="card__elem">
                <span className="card__elem--title">{phrase.toUpperCase()}</span>
        </div>
      </div>
    );
};

export default WeatherCard;