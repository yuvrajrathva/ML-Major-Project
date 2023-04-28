import React from "react";
import logo from "./assets/logo.png";
import "./Coordinate.css";

const Coordinate = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const end_lat = e.target.elements.end_lat.value;
    const end_lng = e.target.elements.end_lng.value;
    const distance = e.target.elements.distance.value;
    const side = e.target.elements.side.value;
    const state = e.target.elements.state.value;
    const timezone = e.target.elements.timezone.value;
    const temperature = e.target.elements.temperature.value;
    const pressure = e.target.elements.pressure.value;
    const visibility = e.target.elements.visibility.value;
    const wind_direction = e.target.elements.wind_direction.value;
    const wind_speed = e.target.elements.wind_speed.value;
    const weather_condition = e.target.elements.weather_condition.value;
    const crossing = e.target.elements.crossing.value;
    const junction = e.target.elements.junction.value;
    const station = e.target.elements.station.value;
    const stop = e.target.elements.stop.value;
    const traffic_signal = e.target.elements.traffic_signal.value;
    const sunrise_sunset = e.target.elements.sunrise_sunset.value;
    const civil_twilight = e.target.elements.civil_twilight.value;
    const nautical_twilight = e.target.elements.nautical_twilight.value;
    const astronomical_twilight = e.target.elements.astronomical_twilight.value;
    const year = e.target.elements.year.value;
    const weather_timestampmonth =
      e.target.elements.weather_timestampmonth.value;
    const weather_timestampyear = e.target.elements.weather_timestampyear.value;
    const weather_timestamphour = e.target.elements.weather_timestamphour.value;
    const weather_timestampweekday =
      e.target.elements.weather_timestampweekday.value;

    const data = {
        end_lat : end_lat,
        end_lng : end_lng,
        distance : distance,
        side : side,
        state : state,
        timezone : timezone,
        temperature : temperature,
        pressure : pressure,
        visibility : visibility,
        wind_direction : wind_direction,
        wind_speed : wind_speed,
        weather_condition : weather_condition,
        crossing : crossing,
        junction : junction,
        station : station,
        stop: stop,
        traffic_signal : traffic_signal, 
        sunrise_sunset : sunrise_sunset,
        civil_twilight : civil_twilight,
        nautical_twilight : nautical_twilight,
        astronomical_twilight : astronomical_twilight,
        year : year,
        weather_timestampmonth : weather_timestampmonth,
        weather_timestampyear : weather_timestampyear,
        weather_timestamphour : weather_timestamphour,
        weather_timestampweekday : weather_timestampweekday

    };
    console.log(data);
    fetch("http://localhost:5000/coordinates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("coordinates of Accident is " + data.coordinates);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const homepage = () => {
    window.location.href = "/";
  };

  return (
    <div className="coordinates-mainContainer">
      <div className="coordinates-container">
        <div className="coordinates-topContainer">
          <div className="logo" onClick={homepage}>
            <img src={logo} />
          </div>
          <h1>Check Coordinates of Accident</h1>
        </div>
        <div className="coordinates-bottomContainer">
          <form onSubmit={onSubmit}>
            <div className="one">
              <div className="end_lat">
                <label htmlFor="end_lat">End Latitude</label>
                <input
                  type="number"
                  id="end_lat"
                  name="end_lat"
                  placeholder="Enter End Latitude"
                />
              </div>
              <div className="end_lng">
                <label htmlFor="end_lng">End Longitude</label>
                <input
                  type="number"
                  id="end_lng"
                  name="end_lng"
                  placeholder="Enter End Longitude"
                />
              </div>
              <div className="distance">
                <label htmlFor="distance">Distance</label>
                <input
                  type="number"
                  id="distance"
                  name="distance"
                  placeholder="Enter Distance"
                />
              </div>
            </div>
            <div className="two">
              <div className="side">
                <label htmlFor="side">Side</label>
                <input
                  type="text"
                  id="side"
                  name="side"
                  placeholder="Enter Side"
                />
              </div>
              <div className="state">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Enter State"
                />
              </div>
              <div className="timezone">
                <label htmlFor="timezone">Timezone</label>
                <input
                  type="text"
                  id="timezone"
                  name="timezone"
                  placeholder="Enter Timezone"
                />
              </div>
            </div>
            <div className="three">
              <div className="temperature">
                <label htmlFor="temperature">Temperature</label>
                <input
                  type="number"
                  id="temperature"
                  name="temperature"
                  placeholder="Enter Temperature"
                />
              </div>
              <div className="pressure">
                <label htmlFor="pressure">Pressure</label>
                <input
                  type="number"
                  id="pressure"
                  name="pressure"
                  placeholder="Enter Pressure"
                />
              </div>
              <div className="visibility">
                <label htmlFor="visibility">Visibility</label>
                <input
                  type="number"
                  id="visibility"
                  name="visibility"
                  placeholder="Enter Visibility"
                />
              </div>
            </div>
            <div className="four">
              <div className="wind_direction">
                <label htmlFor="wind_direction">Wind Direction</label>
                <input
                  type="text"
                  id="wind_direction"
                  name="wind_direction"
                  placeholder="Enter Wind Direction"
                />
              </div>
              <div className="wind_speed">
                <label htmlFor="wind_speed">Wind Speed</label>
                <input
                  type="number"
                  id="wind_speed"
                  name="wind_speed"
                  placeholder="Enter Wind Speed"
                />
              </div>
              <div className="weather_condition">
                <label htmlFor="weather_condition">Weather Condition</label>
                <input
                  type="text"
                  id="weather_condition"
                  name="weather_condition"
                  placeholder="Enter Weather Condition"
                />
              </div>
            </div>
            <div className="five">
              <div className="crossing">
                <label htmlFor="crossing">
                  Crossing
                </label>
                <input type="checkbox" id="crossing" name="crossing" />
              </div>
              <div className="junction">
                <label htmlFor="junction">
                  Junction
                </label>
                <input type="checkbox" id="junction" name="junction" />
              </div>
              <div className="station">
                <label htmlFor="station">
                  Station
                </label>
                <input type="checkbox" id="station" name="station" />
              </div>
              <div className="stop">
                <label htmlFor="stop">
                  Stop
                </label>
                <input type="checkbox" id="stop" name="stop" />
              </div>
              <div className="traffic_signal">
                <label htmlFor="traffic_signal">
                  Traffic Signal
                </label>
                <input
                  type="checkbox"
                  id="traffic_signal"
                  name="traffic_signal"
                />
              </div>
            </div>
            <div className="seven">
              <div className="sunrise_sunset">
                <label htmlFor="sunrise_sunset">Sunrise Sunset</label>
                <input
                  type="text"
                  id="sunrise_sunset"
                  name="sunrise_sunset"
                  placeholder="Enter Sunrise Sunset"
                />
              </div>
            </div>
            <div className="eight">
              <div className="civil_twilight">
                <label htmlFor="civil_twilight">Civil Twilight</label>
                <input
                  type="text"
                  id="civil_twilight"
                  name="civil_twilight"
                  placeholder="Enter Civil Twilight"
                />
              </div>
              <div className="nautical_twilight">
                <label htmlFor="nautical_twilight">Nautical Twilight</label>
                <input
                  type="text"
                  id="nautical_twilight"
                  name="nautical_twilight"
                  placeholder="Enter Nautical Twilight"
                />
              </div>
              <div className="astronomical_twilight">
                <label htmlFor="astronomical_twilight">
                  Astronomical Twilight
                </label>
                <input
                  type="text"
                  id="astronomical_twilight"
                  name="astronomical_twilight"
                  placeholder="Enter Astronomical Twilight"
                />
              </div>
            </div>
            <div className="nine">
              <div className="year">
                <label htmlFor="year">Year</label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  placeholder="Enter Year"
                />
              </div>
            </div>
            <div className="ten">
              <div className="weather_timestampmonth">
                <label htmlFor="weather_timestampmonth">
                  Weather Timestamp Month
                </label>
                <input
                  type="number"
                  id="weather_timestampmonth"
                  name="weather_timestampmonth"
                  placeholder="Enter Weather Timestamp Month"
                />
              </div>
              <div className="weather_timestampyear">
                <label htmlFor="weather_timestampyear">
                  Weather Timestamp Year
                </label>
                <input
                  type="number"
                  id="weather_timestampyear"
                  name="weather_timestampyear"
                  placeholder="Enter Weather Timestamp Year"
                />
              </div>
            </div>
            <div className="ten">
              <div className="weather_timestamphour">
                <label htmlFor="weather_timestamphour">
                  Weather Timestamp Hour
                </label>
                <input
                  type="number"
                  id="weather_timestamphour"
                  name="weather_timestamphour"
                  placeholder="Enter Weather Timestamp Hour"
                />
              </div>
              <div className="weather_timestampweekday">
                <label htmlFor="weather_timestampweekday">
                  Weather Timestamp Weekday
                </label>
                <input
                  type="number"
                  id="weather_timestampweekday"
                  name="weather_timestampweekday"
                  placeholder="Enter Weather Timestamp Weekday"
                />
              </div>
            </div>
            <div className="submit" onClick={onSubmit}>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Coordinate;
