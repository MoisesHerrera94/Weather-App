import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    {weekDay:"Lunes", hour:8, state:"clear", tempeture:22},
    {weekDay:"Martes", hour:9, state:"snow", tempeture:19},
    {weekDay:"Miercoles", hour:10, state:"clouds", tempeture:17},
    {weekDay:"Jueves", hour:11, state:"clouds", tempeture:16},
    {weekDay:"Viernes", hour:12, state:"rain", tempeture:14},
]
test("Forecast render", async () => {
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList}/>)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(5)
})