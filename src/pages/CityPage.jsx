import React from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from '../components/CityInfo/CityInfo'
import Weather from '../components/Weather/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForcastChart'
import Forecast from './../components/Forecast'
import AppFrame from './../components/AppFrame'
import useCityPage from '../hooks/useCityPage'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Line } from 'three'

const CityPage = () => {
    
    const {city, chartData, forecastItemList} = useCityPage()

    //const city = "Buenos Aires"
    const country = "Argentina"
    const state = "clouds"
    const temperature = 20
    const humidity = 80
    const wind = 5

    return (
        <AppFrame>
        <Grid container justify="space-araound" direction="column" spacing={2}>
            <Grid item container xs={12} justify="center" alignItems="flex-end">
                <CityInfo city={city} country={country}/>
            </Grid>
            <Grid container item xs={12} justify="center">
                <Weather temperature={temperature} state={state}/>
                <WeatherDetails humidity={humidity} wind={wind}/>
            </Grid>
            <Grid item>
                {!chartData && !forecastItemList && <LinearProgress/>}
            </Grid>
            <Grid item>
                {chartData && <ForecastChart data={chartData} />}
            </Grid>
            <Grid item>
                {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
            </Grid>
        </Grid>
        </AppFrame>
    )
}

export default CityPage
