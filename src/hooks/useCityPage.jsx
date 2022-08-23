import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import 'moment/locale/es'
import { getForecastUrl } from '../utils/urls'
import getChartData from '../utils/transform/getChartData'
import getForecastItemList from '../utils/transform/getForecastItemList'

const useCityPage = () => {
    const {city, countryCode} = useParams()
    const [chartData, setChartData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)

    useEffect(() => {
      const getForecast = async () => {
        const url = getForecastUrl({city, countryCode})

        try {
            const { data } = await axios.get(url)
            const dataAux = getChartData(data)
            const forecastItemListAux = getForecastItemList(data)

            setChartData(dataAux)
            setForecastItemList(forecastItemListAux)
        } catch (error) {
            console.log(error)
        }
    }
      getForecast()
    }, [city, countryCode])

    return { city, chartData, forecastItemList }
}

export default useCityPage