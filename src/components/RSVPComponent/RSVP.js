import React from 'react'
import RSVPForm from './RSVPForm'
import Container from 'react-bootstrap/Container'

export default function RSVP() {
  return (
    <div class="our-story-div">
      <Container>
          <h2>RSVP</h2>
          <RSVPForm/>
          <h4>Change of circumstance?</h4>
          <p>Feel free to send thorugh your RSVP again or send us an <a href="mailto: maxibon.wedding@gmail.com">email</a></p>
      </Container>
    </div>
  )
}
