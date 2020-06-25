import React from 'react'
import { Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './Cards.module.css'

export default function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {

    if(!confirmed){
        return 'Loading'
    }
    console.log(confirmed)
    return (
        <div>
            <Grid  className={styles.container} container spacing={3} justify='center'>
                <Grid item component={Card} xs={3} className={cx(styles.blue, styles.card)} >
                    <CardContent className='cards' variant="outlined">
                    <Typography color='textSecondary' gutterBottom >Infected</Typography>
                    <CountUp start={0} end={confirmed.value} duration={2} seperator=',' />
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={3}  className={cx(styles.green, styles.card)} >
                    <CardContent className='cards' variant="outlined">
                    <Typography color='textSecondary' gutterBottom >Recovered</Typography>
                    <CountUp start={0} end={recovered.value} duration={2} seperator=',' />
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={3}  className={cx(styles.red, styles.card)} >
                    <CardContent className='cards' variant="outlined">
                    <Typography color='textSecondary' gutterBottom >Deaths</Typography>
                    <CountUp start={0} end={deaths.value} duration={2} seperator=' , ' />
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
           
        </div>
    )
}
