import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'
import { Navigate } from "react-router-dom";


const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
  const onSubmit = async e => {
    e.preventDefault()
    login(email, password)
  }
  // Redirect if looged in
  if (isAuthenticated) {
    return <Navigate  to='/dashboard'/>
  }

  return (
    <>
        <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    name="email"
                    value={email}
                    required
                    onChange={e => onChange(e)}
                />
            </div>
            <div className="form-group">
            <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={e => onChange(e)}
            />
            </div>
            <input type="submit" className="btn btn-primary" value="login" />
        </form>
        <p className="my-1">
            Do not have an account? <Link to='/register'>Sign Up</Link>
        </p>
        </section>
    </>
  )
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
