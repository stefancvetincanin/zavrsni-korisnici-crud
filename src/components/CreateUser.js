import React from 'react'

export default function CreateUser() {
  return (
    <main className="container">
      <h2>Create User</h2>
      <form>
        <input type="text" placeholder="First Name" id="name" name="name"></input>
      </form>
    </main>
  )
}