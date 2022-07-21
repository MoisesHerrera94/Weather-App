import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from './../ForecastItem'
import { validValues } from './../IconState'

const renderForcastItem = forecast => {
    const {weekDay, hour, state, tempeture} = forecast
    return (
        <Grid data-testid="forecast-item-container" item key={'${weekDay}${hour}'}>
            <ForecastItem weekDay={weekDay} hour={hour} state={state} tempeture={tempeture}></ForecastItem>
        </Grid>
    )
}
const Forecast = ({ forecastItemList }) => {
    return (
        <Grid container
            justify="space-around"
            alignItems="center">
            {
                    forecastItemList.map(forecast => renderForcastItem(forecast))
            }
            </Grid>
    )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        tempeture: PropTypes.number.isRequired
    })).isRequired
}

export default Forecast