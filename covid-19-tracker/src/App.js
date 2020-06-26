import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import GlobalChart from "./components/Charts/GlobalChart";
import Cards from "./components/Cards/Cards";
//import Countries from "./components/Countries/Countries";
import Table from "./components/Table/table";

import { pakData, allCountriesData } from "./api/api";
import corona from "./images/corona.png";

const App = () => {
  const [data, setData] = useState([]);
  const [provience, setProvience] = useState([]);
  const [countryName, setCountryName] = useState("");

  const handelInput = (e) => {
    setCountryName(e.target.value);
  };

  // being used to fetch data in cards and chart component
  useEffect(() => {
    async function fetcApi() {
      const fetchedData = await allCountriesData(countryName);
      setData(fetchedData);
    }
    fetcApi();
  }, [countryName]);

  // returning country names
  useEffect(() => {
    async function fetcApi() {
      const fetchedData = await pakData(countryName);
      setProvience(fetchedData);
    }
    fetcApi();
  }, [countryName]);

  // const { data } = data
  // const  {provinces}  = provience
  // console.log(countryName)
  return (
    <div>
      <Header handelInput={handelInput} />
      <img alt="covid-19" className="image" width="340px" src={corona} />

      <div className="container">
        <Cards data={data} />
        <Table provinces={provience} country={countryName} />
        <GlobalChart data={data} />
      </div>
    </div>
  );
};

export default App;
