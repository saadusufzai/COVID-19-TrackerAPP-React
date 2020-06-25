import axios from "axios";
const url = "https://covid19.mathdro.id/api"

export const fetchData = async () => {

    try {
        const response = await axios.get(url);
        return response;



    } catch (error) {
     }

}


export const pakData = async ()=>{
    try{
        const response = await axios.get('covid19.mathdro.id/api/countries/pakistan')
        return response
    }
}