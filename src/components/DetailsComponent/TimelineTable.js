import React from 'react'

import Drinks from '../../resources/images/Timeline/DRINKING.jpg'
import Ceremony from '../../resources/images/Timeline/RINGS.jpg'
import Dinner from '../../resources/images/Timeline/CUTLERY.jpg'
import Dancing from '../../resources/images/Timeline/MUSIC.jpg'
import SendOff from '../../resources/images/Timeline/WEDDINGDOVES.jpg'


import { timeline } from '../../resources/text';

export default function Timeline() {
    let iconArray = [Drinks, Ceremony, Dinner, Dancing, SendOff]
    let iconsMap = timeline.map((event, i)=>{
        return <td><img src={iconArray[i]} alt=""/></td>
    })
    let titleMap = timeline.map((event, i)=>{
        return <th>{event.title}</th>
    })
    let timeMap = timeline.map((event, i)=>{
         return <td>{event.time}</td>
    })
return(
    <table>
        <tbody>
            <tr>{iconsMap}</tr>
            <tr>{titleMap}</tr>
            <tr>{timeMap}</tr>
        </tbody>
    </table>
  )
}
