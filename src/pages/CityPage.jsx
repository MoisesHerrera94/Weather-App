import React from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from '../components/CityInfo/CityInfo'
import Weather from '../components/Weather/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForcastChart'
import Forecast from './../components/Forecast'
import AppFrame from './../components/AppFrame'

const CityPage = props => {
    const city = "Buenos Aires"
    const country = "Argentina"
    const state = "cloudy"
    const temperature = 20
    const humidity = 80
    const wind = 5
    const data = [{
        dayHour: "Jue 18",
        min: 14,
        max: 22,
    },
    {
        dayHour: "Vie 06",
        min: 18,
        max: 27,
    },
    {
        dayHour: "Vie 12",
        min: 18,
        max: 28,
    },
    {
        dayHour: "Vie 18",
        min: 18,
        max: 25,
    },
    {
        dayHour: "Sab 06",
        min: 15,
        max: 22,
    },
    {
        dayHour: "Sab 12",
        min: 12,
        max: 19,
    }]
    const forecastItemList = [
        {weekDay:"Lunes", hour:8, state:"sunny", tempeture:22},
        {weekDay:"Martes", hour:9, state:"fog", tempeture:19},
        {weekDay:"Miercoles", hour:10, state:"cloud", tempeture:17},
        {weekDay:"Jueves", hour:11, state:"cloudy", tempeture:16},
        {weekDay:"Viernes", hour:12, state:"rain", tempeture:14},]

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
                <ForecastChart data={data} />
            </Grid>
            <Grid item>
                <Forecast forecastItemList={forecastItemList} />
            </Grid>
        </Grid>
        </AppFrame>
    )
}

export default CityPage
