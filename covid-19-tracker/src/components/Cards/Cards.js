import React from 'react'
import { Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './Cards.module.css'

export default function Cards(data) {

    
    return (
        <div className='container'>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={3} className={cx(styles.red, styles.card)} >
                    <CardContent className='cards' variant="outlined">
                    <Typography color='textSecondary' gutterBottom >Infected</Typography>
                    <CountUp start={0} end={25000} duration={2} seperator=',' />
                    <Typography >{ new Date().toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={3} className='card' >
                    <CardContent className='cards' variant="outlined">
                    <Typography color='textSecondary' gutterBottom >Recovered</Typography>
                    <CountUp start={0} end={25000} duration={2} seperator=',' />
                    <Typography >{ new Date().toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={3} className='card' >
                    <CardContent className='cards' variant="outlined">
                    <Typography color='textSecondary' gutterBottom >Deaths</Typography>
                    <CountUp start={0} end={25000} duration={2} seperator=',' />
                    <Typography >{ new Date().toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
           
        </div>
    )
}
