import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function RSVPForm() {
    const [RSVP, setRSVP] = useState({
      "email":"",
      "name":"",
      "resp": null,
      "numAttend": "",
      "songReq":"",
      "diet":"",
      "otherDiet":""
    })

    const handleClick = (e) => {
      e.preventDefault()
      console.log(RSVP)
      axios.post('http://localhost:4000/rsvp/addResponse', RSVP)
            .then(response => {
                // console.log("RSVP submitted successfully")
                // alert("RSVP submitted successfully")
            }).catch(error => {
                console.log(error)
                alert(error)
            })
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        value={RSVP.email}
        onChange={e => setRSVP({...RSVP, email: e.target.value })}
        required 
        autoFocus/>
        <Form.Text className="text-muted">
          Please use the email your invitation was sent to
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        type="name" 
        placeholder="Enter name"
        value={RSVP.name}
        onChange={e => setRSVP({...RSVP, name: e.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3" id="theRSVP" >
        <Form.Check type="radio" label="Joyfully accepts" name="radio-RSVP" required inline
        value={true}
        onClick={e => setRSVP({...RSVP, resp: e.target.value })}/>
        <Form.Check type="radio" label="Sadly declines" name="radio-RSVP" required inline
        value={false}
        onClick={e => setRSVP({...RSVP, resp: e.target.value })} />
      </Form.Group>
      
      {/* To display second half of form if "Joyfully Accepts" is selected */}
      {RSVP.resp === "true" && 
          <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number Attending</Form.Label>
            <Form.Control type="number" placeholder="Please enter number attending"
            value={RSVP.numAttend}
            onChange={e => setRSVP({...RSVP, numAttend: e.target.value })} />
          </Form.Group>
          

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Song Request</Form.Label>
            <Form.Control type="text" placeholder="Wonderwall by Oasis"
            value={RSVP.songReq}
            onChange={e => setRSVP({...RSVP, songReq: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Dietary Requirements</Form.Label>
            <Form.Check 
            type="radio" 
            label="Vegetarian" 
            name="radio-name"
            value="vegetarian"
            onClick={e => setRSVP({...RSVP, diet: e.target.value })}
            required
            />
            <Form.Check 
            type="radio" 
            label="Vegan" 
            name="radio-name"
            value="vegan"
            onClick={e => setRSVP({...RSVP, diet: e.target.value })}
            required
            />
            <Form.Check 
            type="radio" 
            label="None" 
            name="radio-name"
            value="none"
            onClick={e => setRSVP({...RSVP, diet: e.target.value })}
            required
            />
            <Form.Check 
            type="radio" 
            label="Other" 
            name="radio-name" 
            value="other"
            onClick={e => setRSVP({...RSVP, diet: e.target.value })}
            required
            />
            {/* To display 'other' text-field if diet: 'other' is selected */}
            {RSVP.diet==="other" && 
                  <Form.Control 
                  type="text" 
                  placeholder="Any other dietary requirements"
                  onChange={e => setRSVP({...RSVP, otherDiet: e.target.value })}
                  required
                  />}
          </Form.Group>
      </>}
      <Button variant="dark" className="button" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Form>
  );
}

export default RSVPForm;