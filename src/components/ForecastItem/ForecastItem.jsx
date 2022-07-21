import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import IconState, { validValues } from '../IconState'

const ForecastItem = ({ weekDay, hour, state, tempeture}) => {
    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item>
                <Typography>{weekDay}</Typography>
            </Grid>
            <Grid item>
                <Typography>{hour}</Typography>
            </Grid>
            <Grid item>
                <IconContext.Provider value={{ size:'4em' }}>
                    <IconState state={state} />
                </IconContext.Provider>
            </Grid>
            <Grid item>
                <Typography>{tempeture} º</Typography>
            </Grid>
        </Grid>
    )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    tempeture: PropTypes.number.isRequired
}

export default ForecastItem
