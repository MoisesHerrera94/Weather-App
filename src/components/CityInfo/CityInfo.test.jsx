import React from "react"
import { render } from "@testing-library/react"
import CityInfo from "./CityInfo"


test("CityInfo render", async () => {

    const city = "Buenos Aires"
    const country = "Argentina"
    //AAA
    //Arrange
    //Act

    //Render: Rederiza el componente y regresa una serie de funciones.
    //En este caso usamos "finAllByRole" para consultar a nuestro componente  
    //Vamos a analizar su estado en el "Assert"
    const { findAllByRole } = render (<CityInfo city={city} country={country} />)
    
    //Assert
    // findAllByRole nos va a buscar en este caso todos los componentes que sean "headins" => H1 H2 H3
    // El resultado es un array de componentes
    const cityAndCountryComponets = await findAllByRole("heading")

    //Cuando el test va a ser correcto?
    //Definicion:
    // Cuando el primer elemento (heading) se encuentre la ciudad "Buenos Aires"
    // Y cuando el segundo elemento se encuentre el pais "Argentina"
    expect(cityAndCountryComponets[0]).toHaveTextContent(city)
    expect(cityAndCountryComponets[1]).toHaveTextContent(country)
})