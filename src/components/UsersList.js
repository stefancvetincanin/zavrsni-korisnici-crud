import React from 'react'
import users from '../data/user-base.json'
import User from './User'

// const strucUsers = users.results
const displayUsers = users.results.map((x, i) => {
  return (
    <User user={x} key={i}/>
  )
})

export default function UsersList() {
  return (
    <main>
      <h2>List of users</h2>
      <div>
        {displayUsers}
      </div>
    </main>
  )
}