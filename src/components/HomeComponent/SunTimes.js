import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SunTimes() {
    const [sunrise, setSunrise] = useState('')
    const [sunset, setSunset] = useState('')
    const [goldenHour, setGoldenHour] = useState('')
    
    useEffect(() => {
        axios
            .get(`https://api.sunrisesunset.io/json?lat=-34.921230&lng=138.6007&date=2023-07-15`)
            .then(res => {
                console.log(res)
                setSunrise(res.data.results.sunrise)
                setSunset(res.data.results.sunset)
                setGoldenHour(res.data.results.golden_hour)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
        <p>Sunrise: {sunrise} || Sunset: {sunset} || Golden Hour: {goldenHour}</p>
    )
}
export default SunTimes