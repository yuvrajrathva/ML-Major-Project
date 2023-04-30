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
    // fetch("http://localhost:5000/coordinates", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     alert("coordinates of Accident is " + data.coordinates);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
              <div className="id">
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  placeholder="Enter id"
                  required
                />
              </div>
              <div className="severity">
                <label htmlFor="severity">Severity</label>
                <input
                  type="number"
                  id="severity"
                  name="severity"
                  placeholder="Enter Severity"
                  required
                />
              </div>
              <div className="start_time">
                <label htmlFor="start_time">Start Time</label>
                <input
                  type="text"
                  id="start_time"
                  name="start_time"
                  placeholder="Enter Start Time"
                  required
                />
              </div>
              <div className="end_time">
                <label htmlFor="end_time">End Time</label>
                <input
                  type="text"
                  id="end_time"
                  name="end_time"
                  placeholder="Enter End Time"
                  required
                />
              </div>
            </div>
            <div className="two">
              <div className="start_lat">
                <label htmlFor="start_lat">Start Latitude</label>
                <input
                  type="number"
                  id="start_lat"
                  name="start_lat"
                  placeholder="Enter Start Latitude"
                  required
                />
              </div>
              <div className="start_lng">
                <label htmlFor="start_lng">Start Longitude </label>
                <input
                  type="number"
                  id="start_lng"
                  name="start_lng"
                  placeholder="Enter Start Longitude "
                  required
                />
              </div>
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
            </div>
            <div className="three">
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
              <div className="discription">
                <label htmlFor="discription">Discription</label>
                <input
                  type="text"
                  id="discription"
                  name="discription"
                  placeholder="Enter Discription"
                  required
                />
              </div>
            </div>
            <div className="four">
              <div className="number">
                <label htmlFor="number">Number</label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Enter Number"
                  required
                />
              </div>
              <div className="street">
                <label htmlFor="street">Street</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Enter Street"
                  required
                />
              </div>
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
              <div className="city">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter City"
                  required
                />
              </div>
            </div>
            <div className="five">
              <div className="county">
                <label htmlFor="county">County</label>
                <input
                  type="text"
                  id="county"
                  name="county"
                  placeholder="Enter County"
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
              <div className="zipcode">
                <label htmlFor="zipcode">Zipcode</label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  placeholder="Enter Zipcode"
                  required
                />
              </div>
              <div className="country">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter Country"
                  required
                />
              </div>
            </div>
            <div className="six">
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
              <div className="airport_code">
                <label htmlFor="airport_code">Airport Code</label>
                <input
                  type="text"
                  id="airport_code"
                  name="airport_code"
                  placeholder="Enter Airport Code"
                  required
                />
              </div>
              <div className="weather_timestamp">
                <label htmlFor="weather_timestamp">Weather Timestamp</label>
                <input
                  type="text"
                  id="weather_timestamp"
                  name="weather_timestamp"
                  placeholder="Enter Weather Timestamp"
                  required
                />
              </div>
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
            </div>
            <div className="seven">
              <div className="wind_chill">
                <label htmlFor="wind_chill">Wind Chill</label>
                <input
                  type="number"
                  id="wind_chill"
                  name="wind_chill"
                  placeholder="Enter Wind Chill"
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
              <div className="visibility">
                <label htmlFor="visibility">Visibility</label>
                <input
                  type="number"
                  id="visibility"
                  name="visibility"
                  placeholder="Enter Visibility"
                  required
                />
              </div>
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
            </div>
            <div className="eight">
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
            <div className="nine">
              <div className="amenity">
                <label htmlFor="amenity">Amenity</label>
                <input type="checkbox" id="amenity" name="amenity" />
              </div>
              <div className="bump">
                <label htmlFor="bump">Bump</label>
                <input type="checkbox" id="bump" name="bump" />
              </div>
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
              <div className="no_exit">
                <label htmlFor="no_exit">No Exit</label>
                <input type="checkbox" id="no_exit" name="no_exit" />
              </div>
            </div>
            <div className="ten">
              <div className="railway">
                <label htmlFor="railway">Railway</label>
                <input type="checkbox" id="railway" name="railway" />
              </div>
              <div className="roundabout">
                <label htmlFor="roundabout">Roundabout</label>
                <input type="checkbox" id="roundabout" name="roundabout" />
              </div>
              <div className="station">
                <label htmlFor="station">Station</label>
                <input type="checkbox" id="station" name="station" />
              </div>
              <div className="stop">
                <label htmlFor="stop">Stop</label>
                <input type="checkbox" id="stop" name="stop" />
              </div>
              <div className="traffic_calming">
                <label htmlFor="traffic_calming">Traffic Calming</label>
                <input
                  type="checkbox"
                  id="traffic_calming"
                  name="traffic_calming"
                />
              </div>
              <div className="traffic_signal">
                <label htmlFor="traffic_signal">Traffic Signal</label>
                <input
                  type="checkbox"
                  id="traffic_signal"
                  name="traffic_signal"
                />
              </div>
              <div className="turning_loop">
                <label htmlFor="turning_loop">Turning Loop</label>
                <input type="checkbox" id="turning_loop" name="turning_loop" />
              </div>
            </div>
            <div className="eleven">
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
            <div className="submit">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Coordinate;
