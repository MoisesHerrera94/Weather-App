import React from 'react'
import { render } from '@testing-library/react' 
import ForecastItem from './ForecastItem'

test("ForecastItem render", async() => {
    const { findByText } = render(<ForecastItem weekDay="Lunes" hour={10} state="clear" tempeture={23} />)

    const weekDay = await findByText(/Lunes/)
    const hour = await findByText(/10/)
    const tempeture = await findByText(/23/)

    expect(weekDay).toHaveTextContent("Lunes")
    expect(hour).toHaveTextContent("10")
    expect(tempeture).toHaveTextContent("23")
})