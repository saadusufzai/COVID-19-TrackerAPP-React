import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Chart from './components/Charts/Chart';
import Cards from './components/Cards/Cards';
import Countries from './components/Countries/Countries';

function App() {
  return (
      <>
        <Header />
         <div className='container'>
            <Cards />
            <Countries />
            <Chart />
         </div>
      </>
  );
}

export default App;
