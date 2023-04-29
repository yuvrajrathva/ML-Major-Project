import React from "react";
import logo from "./assets/logo.png";
import "./Severity.css";
const Severity = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const end_lat = e.target.elements.end_lat.value;
    const end_lng = e.target.elements.end_lng.value;
    const distance = e.target.elements.distance.value;
    const side = e.target.elements.side.value;
    const state = e.target.elements.state.value;
    const timezone = e.target.elements.timezone.value;
    const temperature = e.target.elements.temperature.value;
    const humidity = e.target.elements.humidity.value;
    const pressure = e.target.elements.pressure.value;
    const wind_direction = e.target.elements.wind_direction.value;
    const wind_speed = e.target.elements.wind_speed.value;
    const precipitation = e.target.elements.precipitation.value;
    const weather_condition = e.target.elements.weather_condition.value;
    const crossing = e.target.elements.crossing.value;
    const give_way = e.target.elements.give_way.value;
    const junction = e.target.elements.junction.value;
    const station = e.target.elements.station.value;
    const traffic_signal = e.target.elements.traffic_signal.value;
    const sunrise_sunset = e.target.elements.sunrise_sunset.value;
    const civil_twilight = e.target.elements.civil_twilight.value;
    const nautical_twilight = e.target.elements.nautical_twilight.value;
    const astronomical_twilight = e.target.elements.astronomical_twilight.value;
    const month = e.target.elements.month.value;
    const year = e.target.elements.year.value;
    const hour = e.target.elements.hour.value;
    const weekday = e.target.elements.weekday.value;
    const weather_timestampmonth =
      e.target.elements.weather_timestampmonth.value;
    const weather_timestampyear = e.target.elements.weather_timestampyear.value;
    const weather_timestamphour = e.target.elements.weather_timestamphour.value;
    const weather_timestampweekday =
      e.target.elements.weather_timestampweekday.value;

    const data = {
      end_lat: end_lat,
      end_lng: end_lng,
      distance: distance,
      side: side,
      state: state,
      timezone: timezone,
      temperature: temperature,
      humidity: humidity,
      pressure: pressure,
      wind_direction: wind_direction,
      wind_speed: wind_speed,
      precipitation: precipitation,
      weather_condition: weather_condition,
      crossing: crossing,
      give_way: give_way,
      junction: junction,
      station: station,
      traffic_signal: traffic_signal,
      sunrise_sunset: sunrise_sunset,
      civil_twilight: civil_twilight,
      nautical_twilight: nautical_twilight,
      astronomical_twilight: astronomical_twilight,
      month: month,
      year: year,
      hour: hour,
      weekday: weekday,
      weather_timestampmonth: weather_timestampmonth,
      weather_timestampyear: weather_timestampyear,
      weather_timestamphour: weather_timestamphour,
      weather_timestampweekday: weather_timestampweekday,
    };
    console.log(data);
    // fetch("http://localhost:5000/severity", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log(data);
    //     alert("Severity of Accident is " + data.severity);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });
  };

  const homepage = () => {
    window.location.href = "/";
  };

  return (
    <div className="severity-mainContainer">
      <div className="severity-container">
        <div className="severity-topContainer">
          <div className="logo" onClick={homepage}>
            <img src={logo} />
          </div>
          <h1>Check Severity of Accident</h1>
        </div>
        <div className="severity-bottomContainer">
          <form onSubmit={onSubmit}>
            <div className="one">
              <div className="end_lat">
                <label htmlFor="end_lat">End Latitude</label>
                <input
                  type="number"
                  id="end_lat"
                  name="end_lat"
                  placeholder="Enter End Latitude"
                  required
                />
              </div>
              <div className="end_lng">
                <label htmlFor="end_lng">End Longitude</label>
                <input
                  type="number"
                  id="end_lng"
                  name="end_lng"
                  placeholder="Enter End Longitude"
                  required
                />
              </div>
              <div className="distance">
                <label htmlFor="distance">Distance</label>
                <input
                  type="number"
                  id="distance"
                  name="distance"
                  placeholder="Enter Distance"
                  required
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
                  required
                />
              </div>
              <div className="state">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Enter State"
                  required
                />
              </div>
              <div className="timezone">
                <label htmlFor="timezone">Timezone</label>
                <input
                  type="text"
                  id="timezone"
                  name="timezone"
                  placeholder="Enter Timezone"
                  required
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
                                    required
                />
              </div>
              <div className="humidity">
                <label htmlFor="humidity">Humidity</label>
                <input
                  type="number"
                  id="humidity"
                  name="humidity"
                  placeholder="Enter Humidity"
                                    required
                />
              </div>
              <div className="pressure">
                <label htmlFor="pressure">Pressure</label>
                <input
                  type="number"
                  id="pressure"
                  name="pressure"
                  placeholder="Enter Pressure"
                                    required
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
                  required
                />
              </div>
              <div className="wind_speed">
                <label htmlFor="wind_speed">Wind Speed</label>
                <input
                  type="number"
                  id="wind_speed"
                  name="wind_speed"
                  placeholder="Enter Wind Speed"
                  required
                />
              </div>
            </div>
            <div className="five">
              <div className="precipitation">
                <label htmlFor="precipitation">Precipitation</label>
                <input
                  type="number"
                  id="precipitation"
                  name="precipitation"
                  placeholder="Enter Precipitation"
                  required
                />
              </div>
              <div className="weather_condition">
                <label htmlFor="weather_condition">Weather Condition</label>
                <input
                  type="text"
                  id="weather_condition"
                  name="weather_condition"
                  placeholder="Enter Weather Condition"
                  required
                />
              </div>
            </div>
            <div className="six">
              <div className="crossing">
                <label htmlFor="crossing">Crossing</label>
                <input type="checkbox" id="crossing" name="crossing" />
              </div>
              <div className="give_way">
                <label htmlFor="give_way">Give Way</label>
                <input type="checkbox" id="give_way" name="give_way" />
              </div>
              <div className="junction">
                <label htmlFor="junction">Junction</label>
                <input type="checkbox" id="junction" name="junction" />
              </div>
              <div className="station">
                <label htmlFor="station">Station</label>
                <input type="checkbox" id="station" name="station" />
              </div>
              <div className="traffic_signal">
                <label htmlFor="traffic_signal">Traffic Signal</label>
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
                  required
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
                  required
                />
              </div>
              <div className="nautical_twilight">
                <label htmlFor="nautical_twilight">Nautical Twilight</label>
                <input
                  type="text"
                  id="nautical_twilight"
                  name="nautical_twilight"
                  placeholder="Enter Nautical Twilight"
                  required
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
              <div className="month">
                <label htmlFor="month">Month</label>
                <input
                  type="number"
                  id="month"
                  name="month"
                  placeholder="Enter Month"
                  required
                />
              </div>
              <div className="year">
                <label htmlFor="year">Year</label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  placeholder="Enter Year"
                  required
                />
              </div>
              <div className="hour">
                <label htmlFor="hour">Hour</label>
                <input
                  type="number"
                  id="hour"
                  name="hour"
                  placeholder="Enter Hour"
                  required
                />
              </div>
              <div className="weekday">
                <label htmlFor="weekday">Weekday</label>
                <input
                  type="number"
                  id="weekday"
                  name="weekday"
                  placeholder="Enter Weekday"
                  required
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
                  required
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
                  required
                />
              </div>
            </div>
            <div className="eleven">
              <div className="weather_timestamphour">
                <label htmlFor="weather_timestamphour">
                  Weather Timestamp Hour
                </label>
                <input
                  type="number"
                  id="weather_timestamphour"
                  name="weather_timestamphour"
                  placeholder="Enter Weather Timestamp Hour"
                  required
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
                  required
                />
              </div>
            </div>
            <div className="submit">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Severity;
