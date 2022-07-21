import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ForcastChart = ({data}) => {
    return (
        <ResponsiveContainer height={250} width={"95%"}>
            <LineChart margin={{top: 20, bottom: 20, left: 5, right: 5}} data={data}>
                <XAxis dataKey="dayHour"></XAxis>
                <YAxis></YAxis>
                <CartesianGrid></CartesianGrid>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line type="monotone" dataKey="max" stroke="#5858FA"></Line>
                <Line type="monotone" dataKey="min" stroke="#FF0000"></Line>
            </LineChart>
        </ResponsiveContainer>
    )
}

ForcastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired
        })
    )
}

export default ForcastChart
