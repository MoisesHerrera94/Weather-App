import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    {weekDay:"Lunes", hour:8, state:"clear", tempeture:22},
    {weekDay:"Martes", hour:9, state:"snow", tempeture:19},
    {weekDay:"Miercoles", hour:10, state:"clouds", tempeture:17},
    {weekDay:"Jueves", hour:11, state:"clouds", tempeture:16},
    {weekDay:"Viernes", hour:12, state:"rain", tempeture:14},
]
export const ForecastExample = () => (
    <Forecast forecastItemList={forecastItemList} />
)