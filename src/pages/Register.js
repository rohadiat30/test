import React, { useState } from 'react'
import './style.css'
import PropTypes from 'prop-types'

export const Register = ({ setToken }) => {
  const [email, setEmail] = useState()
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = await registerUser({
      email,
      username,
      password,
    })
    setToken(token)
  }
  async function registerUser(credentials) {
    return fetch('94.74.86.174:8080/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json())
  }
  return (
    <div>
      <form>
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
Register.propTypes = {
  setToken: PropTypes.func.isRequired,
}
