import moment from 'moment'
import React, { useState, useEffect } from 'react'

export default function CountDown() {
  const [now, setTime] = useState(moment())

  function tick(){
    setTime(moment());
  }
  
  useEffect(() => {
    console.log("useEffect")
    setInterval(
      () => tick(), 1000)
    }, [])
    
  let weddingDate = moment("20230715", "YYYYMMDD")
  const exp = moment(weddingDate);

  let days = exp.diff(now, 'days');
  let hours = exp.subtract(days, 'days').diff(now, 'hours');
  let minutes = exp.subtract(hours, 'hours').diff(now, 'minutes');
  let seconds = exp.subtract(minutes, 'minutes').diff(now, 'seconds');

  return (
      <h2><em>only</em> {days}d {hours}h {minutes}m {seconds}s <em>Aue...</em></h2>
  )
}
