import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud, WiDayRain, WiDaySunny, WiSnow, WiRaindrop, WiThunderstorm } from 'react-icons/wi'

// 	Thunderstorm, 	Drizzle, Rain, Snow, Clear, Clouds
export const validValues= ["clouds", "clear", "rain", "snow", "drizzle", "thunderstorm" ]
const stateByName = {
    clouds: WiCloud,
    clear: WiDaySunny,
    rain: WiDayRain,
    snow: WiSnow, 
    drizzle: WiRaindrop, 
    thurderstorm: WiThunderstorm
}

const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <StateByName />
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired
}

export default IconState
