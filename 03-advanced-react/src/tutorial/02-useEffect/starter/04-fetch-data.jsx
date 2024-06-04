import React from 'react'
import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const FetchData = async () => {
      try {
        const responds = await fetch(url)
        const users = await responds.json()
        setUsers(users)
      } catch (e) {
        console.log(e.message)
      }
    }
    FetchData()
  }, [])
  console.log(users)

  return (
    <div>
      {users.map((user) => {
        const { id, login, html_url } = user
        return (
          <div key={id}>
            <h2>{login}</h2>
            <h2>{html_url}</h2>
          </div>
        )
      })}{' '}
    </div>
  )
}
export default FetchData
