import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const Login = ({ setToken }) => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = await loginUser({
      username,
      password,
    })
    setToken(token)
  }
  async function loginUser(credentials) {
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
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
}
