import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Chart from "./components/Charts/Chart";
import Cards from "./components/Cards/Cards";
import Countries from "./components/Countries/Countries";
import Table from "./components/Table/table";

import {fetchData, pakData} from './api/api'
import corona from './images/corona.png'

class App extends React.Component {
  state = {
      data: {},
      provinces:[]

  }

  async componentDidMount() {
      const fetchedData = await fetchData();
      const fetchedPakData= await pakData();

      this.setState({ data: fetchedData.data })

      this.setState({ provinces:fetchedPakData.data })
    // this.setState(fetchedPakData)
  }
  
  

   render() {
    const { data } = this.state
    const  {provinces}  = this.state
  

    return (
      <div>
        <Header />
        <img alt='covid-19' className='image' width='340px' src={corona}/>
        
        <div className="container">
          <Cards data={data} />
          <Table provinces={provinces}/>
          <Countries />
          <Chart />
        </div>
    </div>
    )

}
}
export default App;
