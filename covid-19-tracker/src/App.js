import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import GlobalChart from "./components/Charts/GlobalChart";
import Cards from "./components/Cards/Cards";
import Countries from "./components/Countries/Countries";
import Table from "./components/Table/table";

import { fetchData, pakData } from "./api/api";
import corona from "./images/corona.png";

const App = () => {
  const [data, setData] = useState([]);
  const [provience, setProvience] = useState([]);
  const [search, setSearch] = useState('')

 const handelInput =  (e)=>{
     setSearch(e.target.value)
  }
  

  useEffect(() => {
    async function fetcApi() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    fetcApi();
  }, []);

  useEffect(() => {
    async function fetcApi() {
      const fetchedData = await pakData();
      setProvience(fetchedData);
    }
    fetcApi();
  }, []);

  // const { data } = data
  // const  {provinces}  = provience

  return (
    <div>
      <Header handelInput={handelInput} />
      <img alt="covid-19" className="image" width="340px" src={corona} />

      <div className="container">
        <Cards data={data} />
        <Table provinces={provience} />
        <GlobalChart data={data} />
        <Countries prov={data} />
      </div>
    </div>
  );
};

export default App;
