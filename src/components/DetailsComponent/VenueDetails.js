import React from 'react'
import Plant4Map from '../../resources/images/Map.jpg'
export default function VenueDetails() {
  return (
    <div>
        <p><strong>Location</strong> Plant 4, 5 Third St, Bowden SA <a rel="noreferrer" target="_blank" href="https://www.google.com/maps/place/Plant+4+Bowden/@-34.9062044,138.5761054,17z/data=!3m1!4b1!4m5!3m4!1s0x6ab0c8b57ed040c1:0xa77cbeadd19819c!8m2!3d-34.9065213!4d138.5784774">Show in Google Maps</a></p>
        <p><strong>Date</strong> Saturday, July 15 2023</p>
        <p><strong>Time</strong> 5 o'clock for a 5:30 Ceremony start. Reception to Follow</p>
        <p>We will be inside for the whole time but don't forget to bring a jacket just in case!</p>
        <p>Please enter from the North Corner (across from Fourth Street)</p>
        <img 
        src={Plant4Map}
        alt=""
        id="map"
        />
    </div>
  )
}
