import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";


export default function Buttons() {
  const navigate = useNavigate();;
  function handleClick(path) {
    navigate(path);
  }
  return (
      <div className="d-grid gap-2 button">
        <Button variant="outline-light" size="lg" onClick={() => handleClick("RSVP")}>RSVP</Button>
      </div>
  )
}
