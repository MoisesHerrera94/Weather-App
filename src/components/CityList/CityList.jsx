import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Alert from '@material-ui/lab/Alert'
import axios from 'axios'
import convertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo/CityInfo'
import Weather from './../Weather/Weather'
import { Axios } from 'axios'


const getCityCode = (city, countryCode) => `${city}-${countryCode}`

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
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
      const setWeather = async (city, countryCode) => {
        const appid = "bbf341a3554c2a35c384e2b34a7445a2"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`

        try {
            const response = await axios.get(url)

            const { data } = response 
            const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
            const state = data.weather[0].main.toLowerCase()
            const propName = getCityCode(city, countryCode)
            const propValue = { temperature, state}

            setAllWeather(allWeather => ({...allWeather, [propName]: propValue}))
        } catch (error) {
            if(error.response){
                const{data, status} = error.response
                setError("Ha ocurrido un error en el servidor del cliete")
            } else if(error.request){
                setError("Verifique la conexion a internet")
            } else {
                setError("Error al cargar los datos")
            }
        }
      }

      cities.forEach(({city, countryCode}) => {
        setWeather(city, countryCode)
      });
    }, [cities])
    

//    const weather = { temperature: 10, state: "sunny" }
    
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