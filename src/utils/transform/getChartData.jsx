import { toCelsius } from "../utils"
import moment from 'moment'

const getChartData = (data) => {
    console.log("data", data)
            const daysAhead = [0, 1, 2, 3, 4, 5]
            const days = daysAhead.map(d => moment().add(d, 'd'))

            const dataAux = days.map(d => {
            
                const tempObjArray = data.list.filter(item =>{
                    const dayOfYear = moment.unix(item.dt).dayOfYear()
                    return dayOfYear === d.dayOfYear()
                })
                console.log("d.dayOfYear()", d.dayOfYear())
                console.log("tempobjArray", tempObjArray)

                const temps = tempObjArray.map(item => item.main.temp)

                return({
                    dayHour: d.format('ddd'),
                    min: toCelsius(Math.min(...temps)),
                    max: toCelsius(Math.max(...temps)),
                    hasTemps: (temps.length>0 ? true : false)
                })
            }).filter(item => item.hasTemps)

            return dataAux
}

export default getChartData