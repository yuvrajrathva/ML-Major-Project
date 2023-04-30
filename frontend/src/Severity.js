import React from "react";
import logo from "./assets/logo.png";
import "./Severity.css";
import { BackendURL } from "./BackendURL.js";

const Severity = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const severity = e.target.severity.value;
    const start_time = e.target.start_time.value;
    const end_time = e.target.end_time.value;
    const start_lat = e.target.start_lat.value;
    const start_lng = e.target.start_lng.value;
    const end_lat = e.target.end_lat.value;
    const end_lng = e.target.end_lng.value;
    const distance = e.target.distance.value;
    const discription = e.target.discription.value;
    const number = e.target.number.value;
    const street = e.target.street.value;
    const side = e.target.side.value;
    const city = e.target.city.value;
    const county = e.target.county.value;
    const state = e.target.state.value;
    const zipcode = e.target.zipcode.value;
    const country = e.target.country.value;
    const timezone = e.target.timezone.value;
    const airport_code = e.target.airport_code.value;
    const weather_timestamp = e.target.weather_timestamp.value;
    const temperature = e.target.temperature.value;
    const wind_chill = e.target.wind_chill.value;
    const humidity = e.target.humidity.value;
    const pressure = e.target.pressure.value;
    const visibility = e.target.visibility.value;
    const wind_direction = e.target.wind_direction.value;
    const wind_speed = e.target.wind_speed.value;
    const precipitation = e.target.precipitation.value;
    const weather_condition = e.target.weather_condition.value;
    const amenity = e.target.amenity.value;
    const bump = e.target.bump.value;
    const crossing = e.target.crossing.value;
    const give_way = e.target.give_way.value;
    const junction = e.target.junction.value;
    const no_exit = e.target.no_exit.value;
    const railway = e.target.railway.value;
    const roundabout = e.target.roundabout.value;
    const station = e.target.station.value;
    const stop = e.target.stop.value;
    const traffic_calming = e.target.traffic_calming.value;
    const traffic_signal = e.target.traffic_signal.value;
    const turning_loop = e.target.turning_loop.value;
    const sunrise_sunset = e.target.sunrise_sunset.value;
    const civil_twilight = e.target.civil_twilight.value;
    const nautical_twilight = e.target.nautical_twilight.value;
    const astronomical_twilight = e.target.astronomical_twilight.value;

    const data = {
      User_Id: id,
      Severity: severity,
      Start_Time: start_time,
      End_Time: end_time,
      Start_Lat: start_lat,
      Start_Lng: start_lng,
      End_Lat: end_lat,
      End_Lng: end_lng,
      Distance: distance,
      Description: discription,
      Number: number,
      Street: street,
      Side: side,
      City: city,
      County: county,
      State: state,
      Zipcode: zipcode,
      Country: country,
      Timezone: timezone,
      Airport_Code: airport_code,
      Weather_Timestamp: weather_timestamp,
      Temperature: temperature,
      Wind_Chill: wind_chill,
      Humidity: humidity,
      Pressure: pressure,
      Visibility: visibility,
      Wind_Direction: wind_direction,
      Wind_Speed: wind_speed,
      Precipitation: precipitation,
      Weather_Condition: weather_condition,
      Amenity: amenity,
      Bump: bump,
      Crossing: crossing,
      Give_Way: give_way,
      Junction: junction,
      No_Exit: no_exit,
      Railway: railway,
      Roundabout: roundabout,
      Station: station,
      Stop: stop,
      Traffic_Calming: traffic_calming,
      Traffic_Signal: traffic_signal,
      Turning_Loop: turning_loop,
      Sunrise_Sunset: sunrise_sunset,
      Civil_Twilight: civil_twilight,
      Nautical_Twilight: nautical_twilight,
      Astronomical_Twilight: astronomical_twilight,
    };
    console.log(data);
    fetch(BackendURL + "/severity/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // alert("Severity of Accident is " + data.severity);
      })
      .catch((err) => {
        console.log(err);
      });
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
              <div className="id">
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  placeholder="Enter id"
                  defaultValue="1"
                  
                />
              </div>
              <div className="severity">
                <label htmlFor="severity">Severity</label>
                <input
                  type="number"
                  id="severity"
                  name="severity"
                  placeholder="Enter Severity"
                  
                />
              </div>
              <div className="start_time">
                <label htmlFor="start_time">Start Time</label>
                <input
                  type="text"
                  id="start_time"
                  name="start_time"
                  placeholder="Enter Start Time"
                  
                />
              </div>
              <div className="end_time">
                <label htmlFor="end_time">End Time</label>
                <input
                  type="text"
                  id="end_time"
                  name="end_time"
                  placeholder="Enter End Time"
                  
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
                  
                />
              </div>
              <div className="start_lng">
                <label htmlFor="start_lng">Start Longitude </label>
                <input
                  type="number"
                  id="start_lng"
                  name="start_lng"
                  placeholder="Enter Start Longitude "
                  
                />
              </div>
              <div className="end_lat">
                <label htmlFor="end_lat">End Latitude</label>
                <input
                  type="number"
                  id="end_lat"
                  name="end_lat"
                  placeholder="Enter End Latitude"
                  
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
              <div className="discription">
                <label htmlFor="discription">Discription</label>
                <input
                  type="text"
                  id="discription"
                  name="discription"
                  placeholder="Enter Discription"
                  
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
                  
                />
              </div>
              <div className="street">
                <label htmlFor="street">Street</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Enter Street"
                  
                />
              </div>
              <div className="side">
                <label htmlFor="side">Side</label>
                <input
                  type="text"
                  id="side"
                  name="side"
                  placeholder="Enter Side"
                  
                />
              </div>
              <div className="city">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter City"
                  
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
              <div className="zipcode">
                <label htmlFor="zipcode">Zipcode</label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  placeholder="Enter Zipcode"
                  
                />
              </div>
              <div className="country">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter Country"
                  
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
                  
                />
              </div>
              <div className="airport_code">
                <label htmlFor="airport_code">Airport Code</label>
                <input
                  type="text"
                  id="airport_code"
                  name="airport_code"
                  placeholder="Enter Airport Code"
                  
                />
              </div>
              <div className="weather_timestamp">
                <label htmlFor="weather_timestamp">Weather Timestamp</label>
                <input
                  type="text"
                  id="weather_timestamp"
                  name="weather_timestamp"
                  placeholder="Enter Weather Timestamp"
                  
                />
              </div>
              <div className="temperature">
                <label htmlFor="temperature">Temperature</label>
                <input
                  type="number"
                  id="temperature"
                  name="temperature"
                  placeholder="Enter Temperature"
                  
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
                  
                />
              </div>
              <div className="humidity">
                <label htmlFor="humidity">Humidity</label>
                <input
                  type="number"
                  id="humidity"
                  name="humidity"
                  placeholder="Enter Humidity"
                  
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
              <div className="wind_direction">
                <label htmlFor="wind_direction">Wind Direction</label>
                <input
                  type="text"
                  id="wind_direction"
                  name="wind_direction"
                  placeholder="Enter Wind Direction"
                  
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
                  
                />
              </div>
              <div className="precipitation">
                <label htmlFor="precipitation">Precipitation</label>
                <input
                  type="number"
                  id="precipitation"
                  name="precipitation"
                  placeholder="Enter Precipitation"
                  
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
                  
                />
              </div>
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
