import React from 'react';

import './App.css';
import Header from './components/Header';
import Chart from './components/Chart';
import Cards from './components/Cards';
import Countries from './components/Countries';

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
