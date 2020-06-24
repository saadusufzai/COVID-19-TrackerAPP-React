
import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchApi = async ()=>{
    try{
        const { data } = await axios.get(url)
        console.log(data)
        return {data}
       
}     catch(error){
        return error
    }
    
}
