
import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {fetchcountries} from '../../api/api'
import { NativeSelect } from '@material-ui/core';


export default function Tables() {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      const fetch = async () => {
        const data = await fetchcountries();
        setCountries(data);
      };
      fetch();
    }, []);
    console.log(countries);
  
  


    



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



