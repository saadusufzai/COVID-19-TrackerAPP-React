import React, {useState,useEffect} from 'react'
import styles from './Charts.module.css'
import {fetchData} from '../../api/api'
import { Line, Bar } from 'react-chartjs-2';



export default function Chart({data:{confirmed,deaths,recovered,lastUpdate}}) {
    const[data, setData] = useState([])
    useEffect(() => {
       const fetchAPI = async ()=>{ 
        const fetchedData = await fetchData()
        
        setData(fetchedData)
        }
        fetchAPI()
    }, [])

    console.log(data)
    // console.log(deaths.value)
    // console.log(recovered.value)


    const lineChart = (
        <Line/>
    )

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}
