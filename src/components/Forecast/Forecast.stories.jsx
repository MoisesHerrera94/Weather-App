import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    {weekDay:"Lunes", hour:8, state:"sunny", tempeture:22},
    {weekDay:"Martes", hour:9, state:"fog", tempeture:19},
    {weekDay:"Miercoles", hour:10, state:"cloud", tempeture:17},
    {weekDay:"Jueves", hour:11, state:"cloudy", tempeture:16},
    {weekDay:"Viernes", hour:12, state:"rain", tempeture:14},
]
export const ForecastExample = () => (
    <Forecast forecastItemList={forecastItemList} />
)