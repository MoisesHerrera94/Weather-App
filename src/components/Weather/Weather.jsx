import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import IconState, { validValues } from './../IconState'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'

const Weather = ({ temperature, state }) => {
    return (
        <Grid container item direction='row' justify='center' alignItems='center' spacing={1}>
            <IconContext.Provider value={{ size:'6em' }}>
                {state ? <IconState state={state} /> : <Skeleton variant='circle' width={80} height={80}/>}
            </IconContext.Provider>
            {temperature ? <Typography display="inline" variant="h2">{temperature}</Typography>
            : <Skeleton variant='rect' width={80} height={80}/>  }            
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validValues)
}

export default Weather
