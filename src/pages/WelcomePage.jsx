import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const WelcomePage = props => {
    return (
        <div>
            <WelcomeScreen>
                <Grid container direction="column" justify="center" className='full'>
                    <div className="highlight">
                        <Grid item container xs={12} justify='center' alignItems='center'>
                            <Grid item>
                                <IconContext.Provider value={{size: "6em"}}>
                                    <WiDaySunny/>
                                </IconContext.Provider>
                            </Grid>
                        </Grid>
                        <Grid item container direction='column' justify='center' alignItems='center'>
                            <Typography variant="h4" color="inherit">
                                Weather App
                            </Typography>
                            <Link color='inherin' aria-label='menu'
                            component={RouterLink} to='/main'>
                                Ingresar
                            </Link>
                        </Grid>
                    </div>
                </Grid>
            </WelcomeScreen>
        </div>
    )
}

export default WelcomePage
