import React from 'react'

import Buttons from './Buttons'
import SlideShow from './SlideShow'
import CountDown from './CountDown'
import SunTimes from './SunTimes'

export default function Home() {
  return (
    <div className="home-container">
        <h2 id="wedding-date"> Saturday, July 15 2023</h2>
        <CountDown />
        <SunTimes />
        <Buttons />
        <SlideShow />   
    </div>
  )
}
