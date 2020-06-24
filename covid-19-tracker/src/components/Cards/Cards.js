import React from 'react'
import { Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
export default function Cards() {
    return (
        <div className='container'>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={3} className='card' >
                    <CardContent className='cards' variant="outlined">
                    <Typography color='textSecondary' gutterBottom >Recovered</Typography>
                    <CountUp start={0} end={10000} duration={2} seperator=',' />
                    <Typography >{ new Date().toDateString()}</Typography>
                    </CardContent>
                </Grid>

            </Grid>
           
        </div>
    )
}
