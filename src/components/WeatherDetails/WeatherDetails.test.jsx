import React from "react"
import WeatherDetails from "./WeatherDetails"
import { render } from "@testing-library/react"

// findByText permite encontrar un componente por el texto que muestra 
test("WeatherDetails Render", async() => {
    const { findByText } = render(<WeatherDetails humidity={80} wind={10}/>)

    //Al utilizar las barras utilizamos REGEXP, una expresion regular
    const humidity = await findByText(/80/)

    const wind = await findByText(/10/)

    expect(wind).toHaveTextContent("Viento: 10 km/h")
    expect(humidity).toHaveTextContent("Humedad: 80 %")
})