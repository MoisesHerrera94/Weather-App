import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo/CityInfo'
import Weather from './../Weather/Weather'
import { Axios } from 'axios'

const renderCityAndContry = eventOnClickCity => (cityAndCountry, weather) => {
    
    const { city, country} = cityAndCountry
//    const {temperature, state} = weather

    return (
        <ListItem button key={city} onClick={eventOnClickCity}>
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

    useEffect(() => {
      const setWeather = (city, country, countryCode) => {
        const appid = "bbf341a3554c2a35c384e2b34a7445a2"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`

        axios.get(url).then(response => {
            const { data } = response 
            const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
            const state = data.weather[0].main.toLowerCase()
            const propName = `${city}-${country}`
            const propValue = { temperature, state}

            setAllWeather(allWeather => ({...allWeather, [propName]: propValue}))
        }).catch(
            error => {
                if(error.response){
                    const{data, status} = error.response
                    console.log("data", data)
                    console.log("status", status)
                } else if(error.request){
                    console.log("Server in-accesible o no tengo internet")
                } else {
                    console.log("Error imprevisto")
                }
            }
        )
      }

      cities.forEach(({city, country, countryCode}) => {
        setWeather(city, country, countryCode)
      });
    }, [cities])
    

//    const weather = { temperature: 10, state: "sunny" }
    
    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndContry(onClickCity)(cityAndCountry, 
                    allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
            }
        </List>
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