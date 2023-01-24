import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useState } from 'react'
import MainImg from '../components/HomeComponent/MainImg';

function LoginPage({Login, error}) {
    const [email, setEmail] = useState({email:""})

    const submitHandler = e => {
        e.preventDefault();
        Login(email)
    }
  return (
    <div className="our-story-div">
        <h2>Login</h2>
        {(error != "") ? (<div className="error">{error}</div>) : ""}
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email.email}
                    onChange={e => setEmail({email: e.target.value })}
                    required 
                    autoFocus/>
                <Form.Text className="text-muted">
                Please use the email your invitation was sent to
                </Form.Text>
            </Form.Group>
            <Button variant="dark" className="button" type="submit">Login</Button>
        </Form>
    </div>
  )
}

export default LoginPage