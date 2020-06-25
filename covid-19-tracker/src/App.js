import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Chart from "./components/Charts/Chart";
import Cards from "./components/Cards/Cards";
import Countries from "./components/Countries/Countries";
import axios from "axios";

function App() {
  const url = "https://covid19.mathdro.id/api";
  const [data, setData] = useState({
    confirmed:[],
    deaths:[],
    recovered:[]
  })
   
    
  useEffect(() => {
    async function getData() {
      const res = await axios.get(url);
      setData(res.data)
      
      
    }
    getData();
    
   },[]);
   console.log(data.deaths.value)
   console.log(data.recovered.value)
   console.log(data.confirmed.value)
 
  
  return (
    <>
      <Header />
      <div className="container">
        <Cards data={data} />
        <Countries />
        <Chart />
      </div>
    </>
  );
}

export default App;
