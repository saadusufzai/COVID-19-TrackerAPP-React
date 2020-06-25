import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Chart from "./components/Charts/Chart";
import Cards from "./components/Cards/Cards";
import Countries from "./components/Countries/Countries";
import {fetchData} from './api/api'
import corona from './images/corona.png'

class App extends React.Component {
  state = {
      data: {},

  }

  async componentDidMount() {
      const fetchedData = await fetchData();

      this.setState({ data: fetchedData.data })
     
  }
  
   render() {
    const { data } = this.state

    return (
      <div>
        <img alt='covid-19' className='image' width='340px' src={corona}/>
        <Header />
        <div className="container">
          <Cards data={data} />
          <Countries />
          <Chart />
        </div>
    </div>
    )

}
}
export default App;
