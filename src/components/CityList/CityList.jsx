import React from 'react'
import PropTypes from 'prop-types'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import useCityList from '../../hooks/useCityList'
import CityInfo from './../CityInfo/CityInfo'
import Weather from './../Weather/Weather'
import { getCityCode } from '../../utils/utils'

const renderCityAndContry = eventOnClickCity => (cityAndCountry, weather) => {
    
    const {city, country, countryCode} = cityAndCountry
//    const {temperature, state} = weather

    return (
        <ListItem button key={getCityCode(city, countryCode)} onClick={() => eventOnClickCity(city, countryCode)}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={8} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={4} xs={12}>
                    <Weather temperature={weather && weather.temperature} state={weather && weather.state} />
                </Grid>                             
            </Grid>      
        </ListItem>
    )
}

const CityList = ( {cities, onClickCity} ) => {   
//    const weather = { temperature: 10, state: "sunny" }
    const { allWeather, error, setError } = useCityList(cities)
    
    return (
        <div>
            {
                error && <Alert onClose={() => setError(null)} severity="error">{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndContry(onClickCity)(cityAndCountry, 
                        allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired, 
            countryCode: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList