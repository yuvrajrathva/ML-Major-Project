import React, { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import graph1 from "./assets/download.png";
import { BackendURL } from "./BackendURL";
import "./Eda.css";

const Eda = () => {
  // const graphs = [
  //   {
  //     id: 1,
  //     title: "Graph 1",
  //     type: "Univariate continuous data analysis",
  //     link: graph1,
  //   },
  //   {
  //     id: 2,
  //     title: "Graph 2",
  //     type: "Univariate categorical data analysis",
  //     link: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   },
  //   {
  //     id: 3,
  //     title: "Graph 3",
  //     type: "Univariate categorical data analysis",
  //     link: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
  //   },
  // ];

  const types = [
    {
      option: "Univariate continuous data analysis",
    },
    {
      option: "Univariate categorical data analysis",
    },
    {
      option: "Bivariate categorical vs. categorical data analysis",
    },
    {
      option: "Region-wise data analysis",
    },
    {
      option: "With time, data analysis",
    },
    {
      option: "Weather conditions, data analysis",
    },
    {
      option: "Continuous input, categorical output data analysis",
    },
  ];

  const homepage = () => {
    window.location.href = "/";
  };

  const [selectedOption, setSelectedOption] = useState(
    "Univariate continuous data analysis"
  );

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  const [graphs, setGraphs] = useState([]);

  useEffect(() => {
    fetch(BackendURL + "/graph/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setGraphs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  return (
    <div className="eda-mainContainer">
      <div className="eda-container">
        <div className="eda-title">
          <div className="form-logo" onClick={homepage}>
            <img src={logo} />
          </div>
          <h1>EDA of our Model</h1>
        </div>
        <div className="eda-filter">
          <label htmlFor="filter"></label>
          <select
            id="options"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="">-- Select an option --</option>
            {types.map((type) => (
              <option value={type.option}>{type.option}</option>
            ))}
          </select>
        </div>
        <div className="eda-graphsContainer">
          {graphs
            .filter((graph) => graph.type === selectedOption)
            .map((graph) => (
              <div className="graph-div">
                <div className="graph">
                  <img src={graph.img} alt="" />
                </div>
              </div>
            ))}
        </div>
        <button className="top" onClick={scrollToTop}>
          Back to Top
        </button>
      </div>
    </div>
  );
};

export default Eda;
