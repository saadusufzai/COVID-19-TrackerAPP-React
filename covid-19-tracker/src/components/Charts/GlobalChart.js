import React, {useState,useEffect} from 'react'
import styles from './Charts.module.css'
//import {fetchData} from '../../api/api'
import { Line, Bar,Pie,HorizontalBar } from 'react-chartjs-2';



export default function GlobalChart({data:{confirmed,deaths,recovered,lastUpdate}}) {
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

   
 
    // console.log(recovered.value)


    const lineChart = (

        <HorizontalBar
            data={{
                labels:['Confirmed','Recovered','Deaths'],
                datasets:[{
                    data:[confirmed.value,recovered.value,deaths.value],
                    backgroundColor:['rgba(0, 119, 255, 0.699)','rgba(81, 255, 0, 0.651)','rgba(255, 0, 0, 0.692)']
                }],
                
            }}
            options={{
                title:{
                    display:true,
                    text:'COVID SITUAION IN THE WORLD'
                },
                legend:false
            }}
        
        />
    )

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}
