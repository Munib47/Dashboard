import React from 'react'
import { useRef } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const navigate = useNavigate()
    const email = useRef()
    const password = useRef()
    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem("passwordData")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.current.value === "abc@gmail.com" && password.current.value === "12345") {
            localStorage.setItem("emailData", "abc@gmail.com")
            localStorage.setItem("passwordData", "12345")
            navigate('/dashboard')
        }
    }

    return (
        <div className="body">
            <div className="login">
                <h1 className="text-center">Login Here</h1>
                <Form className="needs-validation" onSubmit={ handleSubmit }>
                    <Form.Group className="form-group was-validated">
                        <Form.Label className="form-label" htmlFor="email">Email Address</Form.Label>
                        <Form.Control className="form-control" type="email" id="email" ref={email} required />
                    </Form.Group>

                    <Form.Group className="form-group was-validated">
                        <Form.Label className="form-label" htmlFor="password">Enter Password</Form.Label>
                        <Form.Control className="form-control" type="password" id="password" ref={password} required />
                    </Form.Group>

                    <Button className="btn btn-success w-100" type="submit">Sign in</Button>
                </Form>
            </div>
        </div>
    )
}

export default Login
