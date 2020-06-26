import axios from "axios";

const url = "https://covid19.mathdro.id/api"; 



export const fetchData = async () => {

  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {}
};



export const pakData = async (country) => {

  let mainUrl = "https://covid19.mathdro.id/api/countries/pakistan/confirmed"
 
   if(country){
    mainUrl = `https://covid19.mathdro.id/api/countries/${country}/confirmed`
  }
  try {
    const response = await axios.get(mainUrl );
    return response;
  } catch (err) {}
};


export const allCountriesData = async (country) => {

  let mainUrl = url
 
   if(country){
    mainUrl = `${url}/countries/${country}`
  }
  try {
    const response = await axios.get(mainUrl );
    return response;
  } catch (err) {}
};

export const fetchcountries = async () => {
  try {
    const {data:{countries}} = await axios.get("https://covid19.mathdro.id/api/countries");
    return countries;
  } catch (error) {}
};


export const AllCountriesData = async (country) => {
  let newUrl = url

  if(country){
    newUrl = `${url}/countries/${country}`
  }

  try {
    const { data:{confirmed,recovered,deaths} } = await axios.get(newUrl);
    return [confirmed,recovered,deaths] ;

  } catch (err) {}
};