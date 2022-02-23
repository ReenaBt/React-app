import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import InputForm from "./components/InputForm";
import WeatherCard from "./components/WeatherCard";

const KEY = "lUsUTC4Y0h7PR3gEzIq2IAhjgGEbv70p";

function App() {
  const [cityKey, setCityKey] = useState(null);
  const [cityDetails, setCityDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("")
  const [Id, setID] = useState(null)
  const[err,setError] = useState(false)
  const cityHandler = (newCity) => {
    setCity(newCity)
    const base =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${KEY}&q=${newCity}`;
    const url = base + query;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
       setID(data[0].Country.ID)
        setCityKey(data[0].Key)
        setError(false)
      })
      .catch((err) =>setError(true));
  };
  useEffect(() => {
    if (cityKey) {
      const base =
        "http://dataservice.accuweather.com/forecasts/v1/daily/1day/";
      const query = `${cityKey}?apikey=${KEY}`;
      const url = base + query;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false)
          setCityDetails({
            temperature: data.DailyForecasts[0].Temperature,
            day: data.DailyForecasts[0].Day,
          });
        });
    }
  }, [cityKey]);
 
  return (
    <div className="App">
      <HomePage>
        <InputForm cityHandler={cityHandler} />
        {err && <p> Please Recheck your city spelling and Try again!</p>}
{!err && loading && <p>Loading...</p>}
        {cityDetails && <WeatherCard details={cityDetails} city={city} Id={Id}/>}
      </HomePage>
    </div>
  );
}

export default App;