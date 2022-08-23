import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'
import { CineonToneMapping } from 'three'
import { getCities } from '../utils/serviceCities'



const MainPage = props => {
    const history = useHistory()

    const onClickHandler = (city, countryCode) => {
        // history.push permite alterar la URL por programacion
        console.log("City", city)
        console.log("countryCode", countryCode)
        history.push(`/city/${countryCode}/${city}`)
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={getCities()} onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
