import React from 'react'
import { Link } from 'react-router-dom'
import { p1, p2, p3 } from '../../resources/text'
import PubCrawlImg from '../../resources/images/OurStory/IMG_0063.JPG'
import ProposalImg from '../../resources/images/OurStory/IMG_0971.jpg'
import GambierBusImg from '../../resources/images/OurStory/IMG_0089.JPG'

export default function OurStory() {
  // throw new Error(' Not a hero!')
  return (
    <div class="our-story-div">
      
      <h2> Our Story </h2>
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <p>
        We can't wait for you all to help us celebrate the beginning of our next chapter on July 15, 2023. 
        Please find extra information in the <Link to="/Details">Details</Link> tab and <Link to="/RSVP">RSVP</Link> by 
        May 15th 2023 using the online form.
      </p>
      <img className='story-images'
        src={GambierBusImg}
        alt=""
      />
      <img className='proposal-img'
        src={ProposalImg}
        alt=""
      />
      <img className='story-images'
        src={PubCrawlImg}
        alt=""
      />
    </div>
  )
}