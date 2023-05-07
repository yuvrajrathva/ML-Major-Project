import React from "react";
import map from "./assets/map.svg";
import road from "./assets/road.svg";
import logo from "./assets/logo.png";
import "./Homepage.css";

const Homepage = () => {

  const severity = () => {
    window.location.href = "/severity";
  }
  const coordinate = () => {
    window.location.href = "/coordinates";
  }
  const eda = () => {
    window.location.href = "/eda";
  }
  const homepage = () => {
    window.location.href = "/";
  };
  
  return (
    <div className="herosection-mainContainer">
      <div className="herosection-container">
        <div>
          <div className="homepage-logo" onClick={homepage}>
            <img src={logo} />
          </div>
        </div>
        <div className="herosection-topContainer">
          <div className="herosection-topLeft">
            <div className="herosection-text typewriter">
              <h2>
                Predicting and preventing car accidents is critical for public
                <h1>safety.</h1>
              </h2>
              <p>
                Every year, countless lives are lost or affected by car
                accidents. But with the power of data and analysis, we can turn
                this around. Our website provides insights into real-time car
                accident prediction, hotspot locations, casualty analysis, and
                more. By styding the causes and effects of accidents, we can
                help make our roads safer and prevent future tragendies.
              </p>
              <span>
                "Accidents can be avoided if we take the time to understand the
                root cause and take preventive measures." - John D. Rockefeller
                Jr.
              </span>
            </div>
          </div>
          <div className="herosection-topRight ball">
            <img src={map} alt="" />
          </div>
        </div>
        <div className="herosection-bottomContainer">
          <div className="herosection-bottomLeft">
            <div className="severity-button" onClick={severity}>Severity</div>
            <div className="coordinates-button" onClick={coordinate}>Coordinates</div>
            <div className="eda-button" onClick={eda}>
              EDA
            </div>
          </div>
          <div className="herosection-bottomRight">
            <img src={road} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
