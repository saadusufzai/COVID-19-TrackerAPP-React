import React, {useState,useEffect} from 'react'
import styles from './Charts.module.css'
//import {fetchData} from '../../api/api'
import { Line, Bar,Pie,HorizontalBar } from 'react-chartjs-2';



export default function Chart({data:{confirmed,deaths,recovered,lastUpdate}}) {
    // const[data, setData] = useState([])
    // useEffect(() => {
    //    const fetchAPI = async ()=>{ 
    //     const fetchedData = await fetchData()
        
    //     setData(fetchedData)
    //     }
    //     fetchAPI()
    // }, [])
    if(!deaths){
        return 'loading...'
    }
   
    // console.log(deaths.value)
    // console.log(recovered.value)


    const lineChart = (

        <HorizontalBar
            data={{
                labels:['Confirmed','Recovered','Deaths'],
                datasets:[{
                    data:[confirmed.value,recovered.value,deaths.value],
                    backgroundColor:['Yellow','green','red']
                }],
                
            }}
            options={{
                title:{
                    text:'COVID CASE'
                }
            }}
        
        />
    )

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}
