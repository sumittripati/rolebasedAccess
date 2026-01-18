import React from 'react'
import { useState } from 'react'
import './about.css'
const About = () => {

  const [selectedUser, setSelectedUser] = useState(null);



  let users = [
    {
      id: 1,
      name: "Rahul",
      status: "online",
    },
    {
      id: 2,
      name: "Amit",
      status: "offline",
    },
    {
      id: 3,
      name: "Priya",
      status: "online",
    }
  ]
  return (
    <div>
      <h1>About Page wdewef wedfwedf</h1>
      <div className='left'>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={()=>setSelectedUser(user)}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div className='right'>
        <div className='user-info'>
          {selectedUser ? 
          (<>
            <h2>{selectedUser.name}</h2>
            <p>Status: {selectedUser.status}</p>
          </>) : 
          (<>
            <h2></h2>
          </>)
          }
        </div>
      </div>
    </div>
  )
}

export default About
