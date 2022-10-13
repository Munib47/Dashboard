import React from 'react'
import { useRef } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

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
                <form className="needs-validation" onSubmit={ handleSubmit }>
                    <div className="form-group was-validated">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input className="form-control" type="email" id="email" ref={email} required />
                    </div>

                    <div className="form-group was-validated">
                        <label className="form-label" htmlFor="password">Enter Password</label>
                        <input className="form-control" type="password" id="password" ref={password} required />
                    </div>

                    <button className="btn btn-success w-100" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
