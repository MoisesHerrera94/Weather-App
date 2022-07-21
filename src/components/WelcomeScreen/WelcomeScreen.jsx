import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from "three" 
import { inferControls } from '@storybook/client-api'
 
const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null)
  const [vanta, setVanta] = useState(0)

   // En la primera renderizacion "myRefDiv.current" es igual a nulo por el valor
   // inicial que le pasamos  
  console.log("myRefDiv.current", myRefDiv.current)

  //La funcion useEffect se va "invocar" ante la segunda rederizacion
  //en ese punto ya va a contener un valor "myRefDiv.current"
  useEffect(() => {
      console.log("myRefDiv.current (en useEffect)", myRefDiv.current)

      //Solo para una vez por dentro de if
      //vanta === 0, es igual a "vanta == false"
      //aun mas corto es igual a "!vanta"
      if(!vanta){
        setVanta(1) 

        Clouds({
          THREE,
          el: myRefDiv.current
        })
        console.log("Establezco Vanta a un valor diferente de 0")
      }

      return () => {
        if(vanta) {
          setVanta(0)

          console.log("Se libero Vanta")
        }
      }
  }, [vanta])

  return (
    <div className='full' ref={myRefDiv}>
      {children}
    </div>
  )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen