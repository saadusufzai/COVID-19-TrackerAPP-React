
import React,{useState, useEffect} from 'react';

import FormControl from '@material-ui/core/FormControl';
import {fetchcountries} from '../../api/api'
import { NativeSelect } from '@material-ui/core';


export default function Countries() {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      const fetch = async () => {
        const data = await fetchcountries();
        setCountries(data);
      };
      fetch();
    }, []);

  return (
    <div>
     <FormControl>
         <NativeSelect>
             <option value=''>Countries</option>
            {countries.map((country,i)=><option key={i}   value={country.name}>{country.name}</option>)}
         </NativeSelect>
      </FormControl>
    </div>
  );
}



