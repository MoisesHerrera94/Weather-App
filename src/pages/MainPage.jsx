import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'

const cities = [
    {city:"Buenos Aires", country:"Argentina", countryCode:"AR"},
    {city:"Bogota", country:"Colombia", countryCode:"CO"},
    {city:"Madrid", country:"España", countryCode:"ES"},
    {city:"Ciudad de Mexico", country:"Mexico", countryCode:"MX"}
]

const MainPage = props => {
    const history = useHistory()

    const onClickHandler = () => {
        // history.push permite alterar la URL por programacion
        history.push("/city")
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={cities} onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
