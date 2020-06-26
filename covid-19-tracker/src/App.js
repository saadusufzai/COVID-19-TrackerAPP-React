import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import GlobalChart from "./components/Charts/GlobalChart";
import Cards from "./components/Cards/Cards";
import Country from "./components/countries/country";
import Table from "./components/Table/table";

import { pakData, allCountriesData,fetchcountries } from "./api/api";
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

  const [countries, setCountries] = useState([]);
  
  
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchcountries();
      setCountries(data);
    };
    fetch();
  }, []);

  // const { data } = data
  // const  {provinces}  = provience
  // console.log(countryName)
  return (
    <div>
      <Header handelInput={handelInput} countries={countries} />
      <img alt="covid-19" className="image" width="340px" src={corona} />

      <div className="container">
        <Cards data={data} />
        <Table provinces={provience} country={countryName} />
        {/* <Country  handelInput={handelInput} countries={countries} /> */}
        <GlobalChart data={data} />

      </div>
    </div>
  );
};

export default App;
