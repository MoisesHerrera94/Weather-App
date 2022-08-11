import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import convertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import CityInfo from '../components/CityInfo/CityInfo'
import Weather from '../components/Weather/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForcastChart'
import Forecast from './../components/Forecast'
import AppFrame from './../components/AppFrame'
import moment from 'moment'
import 'moment/locale/es'

const dataExample = [
    {
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
    }
]

const forecastItemListExample = [
        {weekDay:"Lunes", hour:8, state:"clear", tempeture:22},
        {weekDay:"Martes", hour:9, state:"snow", tempeture:19},
        {weekDay:"Miercoles", hour:10, state:"clouds", tempeture:17},
        {weekDay:"Jueves", hour:11, state:"clouds", tempeture:16},
        {weekDay:"Viernes", hour:12, state:"rain", tempeture:14},
]

const CityPage = () => {
    const {city, countryCode} = useParams()
    const [data, setData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)

    useEffect(() => {
      const getForecast = async () => {
        const appid = "bbf341a3554c2a35c384e2b34a7445a2"
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`

        try {
            const { data } = await axios.get(url)

            console.log("data", data)
            const daysAhead = [0, 1, 2, 3, 4, 5]
            const days = daysAhead.map(d => moment().add(d, 'd'))

            const toCelsius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed(0))

            const dataAux = days.map(d => {
            
                const tempObjArray = data.list.filter(item =>{
                    const dayOfYear = moment.unix(item.dt).dayOfYear()
                    return dayOfYear === d.dayOfYear()
                })
                console.log("d.dayOfYear()", d.dayOfYear())
                console.log("tempobjArray", tempObjArray)

                const temps = tempObjArray.map(item => item.main.temp)

                return({
                    dayHour: d.format('ddd'),
                    min: toCelsius(Math.min(...temps)),
                    max: toCelsius(Math.max(...temps))
                })
            })

            //weekDay:"Lunes", hour:8, state:"clear", tempeture:22
            const interval = [4, 8, 12, 16, 20, 24]
            const forecastItemListAux = data.list.filter((item, index) => interval.includes(index))
            .map(item => {
                return({
                    weekDay: moment.unix(item.dt).format('dddd'),
                    hour: moment.unix(item.dt).hour(),
                    state: item.weather[0].main.toLowerCase(),
                    tempeture: toCelsius(item.main.temp)    
                })
            })

            setData(dataAux)
            setForecastItemList(forecastItemListAux)
        } catch (error) {
            console.log(error)
        }
    }
      getForecast()
    }, [city, countryCode])

    //const city = "Buenos Aires"
    const country = "Argentina"
    const state = "clouds"
    const temperature = 20
    const humidity = 80
    const wind = 5
    //const data = dataExample
    //const forecastItemList = forecastItemListExample

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
                {data && <ForecastChart data={data} />}
            </Grid>
            <Grid item>
                {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
            </Grid>
        </Grid>
        </AppFrame>
    )
}

export default CityPage
